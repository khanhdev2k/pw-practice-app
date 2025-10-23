import { Page } from "@playwright/test";

export class NavPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async navToMockUrl() {
        await this.page.goto("https://uatmw.kmgamesdev.net/");
    }

    async qaLogin() {
        await this.page.getByPlaceholder('Enter user name').fill('qa')
        await this.page.getByPlaceholder('Enter password').fill('qa123456');
        await this.page.getByRole('button', {name: 'Login'}).click();
    }
    
    async loginWithTestUser() {
        await this.page.getByPlaceholder('Enter login name').fill('VNQA_KL001_TZS');
        await this.page.getByRole('button', {name: 'Login'}).click();
        await this.page.waitForTimeout(2000);
    }
    
    async runGameOanTuTi() {
        const searchBox = this.page.getByPlaceholder('search by game');
        const oanTuTi = this.page.getByRole('button', {name: 'Launch'}).first();
        const playInNewTab = this.page.locator('.form-check', {hasText: 'Play in New Tab'});

        await searchBox.fill('Viet Nam');
        await this.page.waitForTimeout(2000);
        await playInNewTab.click();
        await oanTuTi.click()
    }

}