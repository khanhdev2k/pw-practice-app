import { Locator, Page } from "@playwright/test";
import { Helper } from "./helper";
import { CurCodeItem } from "../../data/dataCur/curCode";

const dataCurrency = require('../../data/dataCur/dataCurrency.json');
export class NavPage  extends Helper{
    readonly buttonLogin: Locator
    readonly dataCurrency = dataCurrency;

    constructor(page: Page) {
        super(page);
        this.buttonLogin = page.getByRole('button', {name: 'Login'});
        this.dataCurrency = dataCurrency;
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
        await this.page.getByPlaceholder('Enter login name').fill(await this.testUserLogin())
        await this.buttonLogin.click();
        await this.waitSeconnds(2);
    }
    
    async runGameOanTuTi() {
        const searchBox = this.page.getByPlaceholder('search by game');
        const oanTuTi = this.page.getByRole('button', {name: 'Launch'}).first();
        const playInNewTab = this.page.locator('.form-check', {hasText: 'Play in New Tab'});
        const gameCard = this.page.locator('.game-card').filter({hasText: 'Viet Nam Rock Paper Scissors'});
        
        await this.fund('10000');
        await this.waitSeconnds(1.5);
        await searchBox.pressSequentially('Viet Nam Rock Paper Scissors', {delay: 100}  );
        await playInNewTab.click();
        await oanTuTi.click()
    }

    private async fund(amount: string) {
        const fundDropdownList = this.page.locator('.MuiGrid-root').getByPlaceholder('deposit / withdraw value');
        const syncBalanceBtn = this.page.getByRole('button', {name: 'Sync Balance'});

        await fundDropdownList.fill(amount);
        await syncBalanceBtn.click();
    }

    async testUserLogin(){
        const currencyKeys = Object.keys(this.dataCurrency);
        const randomKey = currencyKeys[Math.floor(Math.random() * currencyKeys.length)];
        const testUser = this.dataCurrency[randomKey as keyof typeof this.dataCurrency];
        return testUser.mockUser;
    }

}