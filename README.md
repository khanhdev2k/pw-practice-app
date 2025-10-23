### Ngx-Admin Angular 14 application from akveo.com

This is modified and more lightweight version of original application to practice UI Automation with Playwright.

The original repo is here: https://github.com/akveo/ngx-admin

npm init -y
# cài Playwright Test, TypeScript, dotenv và types
npm install -D @playwright/test typescript ts-node dotenv @types/node
# cài browser binaries của Playwright (chạy 1 lần)
npm init playwright@latest
# Khởi tạo file tsconfig.json