import { Page } from "@playwright/test";

export class Helper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitSeconnds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
} 