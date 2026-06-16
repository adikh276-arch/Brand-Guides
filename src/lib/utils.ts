import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDownloadUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.includes("res.cloudinary.com") && !url.includes("fl_attachment")) {
    if (url.includes("/image/upload/") || url.includes("/video/upload/")) {
      return url.replace("/upload/", "/upload/fl_attachment/");
    }
  }
  return url;
}
