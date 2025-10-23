import { Locator, Page } from "@playwright/test";
import { Helper } from "./helper";

export class NavPage  extends Helper{
    readonly buttonLogin: Locator

    constructor(page: Page) {
        super(page);
        this.buttonLogin = page.getByRole('button', {name: 'Login'});
    }

    async navToMockUrl() {
        await this.page.goto("https://uatmw.kmgamesdev.net/");
    }

    async qaLogin() {
        await this.page.getByPlaceholder('Enter user name').fill('qa')
        await this.page.getByPlaceholder('Enter password').fill('qa123456');
        await this.buttonLogin.click();
    }
    
    async loginWithTestUser() {
        await this.page.getByPlaceholder('Enter login name').fill('VNQA_KL001_TZS');
        await this.buttonLogin.click();
        await this.waitSeconnds(2);
    }
    
    async runGameOanTuTi() {
        const searchBox = this.page.getByPlaceholder('search by game');
        const oanTuTi = this.page.getByRole('button', {name: 'Launch'}).first();
        const playInNewTab = this.page.locator('.form-check', {hasText: 'Play in New Tab'});

        await searchBox.fill('Viet Nam');
        await this.waitSeconnds(2);
        await playInNewTab.click();
        await oanTuTi.click()
    }

}