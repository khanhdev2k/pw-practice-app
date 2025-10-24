import { Page } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';

export class Helper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitSeconnds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }

   async waitForSessionResponse(
    fileName: string = 'session.json',
    timeoutMs: number = 30_000
  ) {
    // Đợi response /sessions POST
    const response = await this.page.waitForResponse(
      (res) => res.url().includes('/sessions') && res.request().method() === 'POST',
      { timeout: timeoutMs }
    );

    // Parse JSON body
    const body = await response.json();
    console.log('🎯 dataSession:', body);

    // Tạo thư mục nếu chưa có
    const dataDir = path.resolve(process.cwd(), 'pw-practice-app/data/mockData');
    fs.mkdirSync(dataDir, { recursive: true });

    // Lưu file
    const filePath = path.join(dataDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');

    console.log(`✅ Session body saved to ${filePath}`);
  }
} 