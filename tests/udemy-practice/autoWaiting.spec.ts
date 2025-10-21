import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("https://uatmw.kmgamesdev.net/");
})
test.describe("Login page: ", () => {
    test.beforeEach('Login with Mock wallet', async ({page}) => {
        await page.getByPlaceholder('Enter user name').fill('qa')
        await page.getByPlaceholder('Enter password').fill('qa123456');
        await page.getByRole('button', {name: 'Login'}).click();
        await page.getByPlaceholder('Enter login name').fill('VNQA_KL001_TZS');
        await page.getByRole('button', {name: 'Login'}).click();
        await page.waitForTimeout(2000);
    })

    test('Timeout example', async ({page}) => {
        const searchBox = page.getByPlaceholder('search by game');
        const oanTuTi = page.getByRole('button', {name: 'Launch'}).first();
        const playInNewTab = page.locator('.form-check', {hasText: 'Play in New Tab'});

        await searchBox.fill('Viet Nam');
        await page.waitForTimeout(2000);
        await playInNewTab.click();
        await oanTuTi.click()
    })
})