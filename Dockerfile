FROM node:20-alpine  AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist /usr/share/nginx/html/brand_guides
# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY vite-nginx.conf /etc/nginx/conf.d/nginx.conf

# Expose the port that Nginx will listen on
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
