import {test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:4200/");
})

// multiple tests example
test.describe("Locator syntax rule:", () => {
    test.beforeEach("Nav to page Forms: ", async ({page} )    => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click()
})
    test('Locator syntax rule: ', async ({page}) => {
         // by tag name
        await page.locator("input").first().click()

        // by id
        page.locator("#inputEmail1");

        // by class name
        page.locator(".input-full-width");

        // by attribute name
        page.locator('[placeholder="Email"]');

        // by different attribute
        page.locator('input[placeholder="Email"][nbinput');

        // by contains text
        page.locator('button:has-text("Submit")');

        // by xpath (not recommended on Playwright)
        page.locator('//input[@id="inputEmail1"]');

        // by partial text 
        page.locator(':text("Sign")');

        // by excact text
        page.locator(':text-is("Sign in")');

        // by combining locators
        page.locator('form').locator('input').first();
    })

    test('User facing locators: ', async ({page}) => {
        // by role
        page.getByRole('button');
        page.getByRole('button', { name: 'Sign in' }).click();  
        page.waitForTimeout(2000);
    })


    // Child locators
    test.only('Chile locators: ', async ({page}) => {
        await page.locator('nb-card nb-radio :text-is("Option 1")').click();
        await page.locator('nb-card nb-radio :text-is("Disabled Option")').isVisible();
        await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

        await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click();  
    })
})  

