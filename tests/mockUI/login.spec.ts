import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("https://uatmw.kmgamesdev.net/");
})

test.describe("Login page: ", () => {
    test.beforeEach('Login with Mock wallet', async ({page}) => {
        await page.getByPlaceholder('Enter user name').fill('qa')
        await page.getByPlaceholder('Enter password').fill('qa123456');
        await page.getByRole('button', {name: 'Login'}).click();
    })

    test('Login with account: ' + 'VNQA_KL001_TZS', async ({page}) => {
        await page.getByPlaceholder('Enter login name').fill('VNQA_KL001_TZS');
        await page.getByRole('button', {name: 'Login'}).click();
        await page.waitForTimeout(2000);
    })
})