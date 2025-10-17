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
    test('Child locators: ', async ({page}) => {
        await page.locator('nb-card nb-radio :text-is("Option 1")').click();
        await page.locator('nb-card nb-radio :text-is("Disabled Option")').isVisible();
        await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

        await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click();  

        // get button with index
        await page.locator('nb-card').nth(3).getByRole('button').click(); // Button submit
        await page.waitForTimeout(2000);
        await page.locator('nb-card').nth(2).getByRole('button').click(); // Button send
        await page.waitForTimeout(2000);
    })

    test.only('Parrent locators: ', async ({page}) => {
        // Block form
        await page.locator('nb-card', {hasText: 'Block form'}).getByText('First Name').fill("Khanh");
        await page.locator('nb-card', {hasText: 'Block form'}).getByText('Last Name').fill("Le");
        await page.locator('nb-card', {hasText: 'Block form'}).getByText('Email').fill("khanhleduy99er@gmail.com");
        await page.locator('nb-card', {hasText: 'Block form'}).getByRole('button', {name: 'Submit'}).click();

        // Form without labels
        await page.locator('nb-card', {has: page.locator('.status-basic')}).getByRole('button', {name: 'Send'}).click();
        await page.locator('nb-card', {has: page.locator('.status-basic')}).getByRole('button', {name: 'Send'}).click();
        await page.locator('nb-card').filter({has: page.locator('.nb-transition')}).getByRole('textbox', {name: 'Recipients'}).click();


        // using filter method to find the element
        await page.locator('nb-card').filter({has: page.locator('.status-warning')}).filter({has: page.locator('.text')}).getByRole('textbox', {name: 'Email'}).click();

        // using method locator ..
        await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: 'Email'}).click();
    })
})  

