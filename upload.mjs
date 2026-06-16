import fs from 'fs/promises';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dh02ythrk',
  api_key: '183934657774262',
  api_secret: 'FBa6ANWQR16_uDsTPBNLd-gnPpI'
});

const uploadAsset = async (filePath) => {
  try {
    const isZip = filePath.endsWith('.zip');
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'mantracare-brand-guides',
      use_filename: true,
      unique_filename: false,
      resource_type: isZip ? 'raw' : 'image',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading', filePath, error);
    return null;
  }
};

const getFiles = async (dir) => {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(await getFiles(fullPath));
      } else if (/\.(png|jpg|jpeg|svg|webp|gif|ico|zip)$/i.test(fullPath)) {
        files.push(fullPath);
      }
    }
    return files;
  } catch (e) {
    return [];
  }
};

const main = async () => {
  const dirsToScan = ['public', 'src/assets'];
  let files = [];
  for (const dir of dirsToScan) {
    files = files.concat(await getFiles(dir));
  }
  
  const replacements = {};
  
  for (const file of files) {
    console.log(`Uploading ${file}...`);
    const url = await uploadAsset(file);
    if (url) {
      // Normalize path separators for regex matching
      const basename = path.basename(file);
      if (file.includes('public')) {
        replacements[`/${basename}`] = url;
      } else if (file.includes('assets')) {
        replacements[`@/assets/${basename}`] = url;
      }
      
      // Delete local file
      await fs.unlink(file);
    }
  }
  
  console.log('Replacements:', replacements);
  
  const replaceInFiles = async (dir) => {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
          await replaceInFiles(fullPath);
        } else if (/\.(tsx|ts|css|html|json)$/i.test(fullPath)) {
          let content = await fs.readFile(fullPath, 'utf8');
          let modified = false;
          for (const [local, url] of Object.entries(replacements)) {
            if (content.includes(local)) {
              content = content.split(local).join(url);
              modified = true;
            }
          }
          
          // Fix invalid imports that might have been created
          // e.g., import logo from "https://..."
          const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+["'](https:\/\/res\.cloudinary\.com\/[^"']+)["'];/g;
          if (importRegex.test(content)) {
            content = content.replace(importRegex, 'const $1 = "$2";');
            modified = true;
          }
          
          if (modified) {
            console.log(`Updated ${fullPath}`);
            await fs.writeFile(fullPath, content, 'utf8');
          }
        }
      }
    } catch (e) {
      console.log('Skipping', dir);
    }
  };
  
  await replaceInFiles('src');
  await replaceInFiles('public');
  
  console.log('Done!');
};

main();
