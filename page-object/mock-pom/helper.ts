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

    /**
   * Chờ response /sessions (POST).
   * - Có thể truyền hàm trigger (vd: click Launch) để tránh race condition.
   * - Có timeout để không treo test.
   */
  async waitForSessionResponse(opts?: {
    trigger?: () => Promise<unknown>;
    timeoutMs?: number;
  }): Promise<{ response: Response; body: any }> {
    const { trigger, timeoutMs = 30_000 } = opts ?? {};

    const [response] = await Promise.all([
      this.page.waitForResponse(
        (res) => res.url().includes('/sessions') && res.request().method() === 'POST',
        { timeout: timeoutMs }
      ),
      // trigger có thể undefined (nếu bạn đã click trước đó)
      trigger?.()
    ]);

    const body = await response.json();
    console.log('🎯 dataSession:', body);
    return { response, body };
  }

  /**
   * Lưu JSON vào thư mục data (tạo nếu chưa có).
   * Trả về đường dẫn file đã lưu.
   */
  saveJsonIntoData(fileName: string, data: unknown, dir = 'data'): string {
    const dataDir = path.resolve(process.cwd(), dir);
    fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    return filePath;
  }
} 