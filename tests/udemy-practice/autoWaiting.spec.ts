import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("http://uitestingplayground.com/ajax");
    await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();
})

    test('Auto waiting: ', async ({page}) => {
        const message = page.locator(".bg-success");
        await expect(message).toHaveText("Data loaded with AJAX get request.");
    })