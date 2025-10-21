import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:4200/");
})

// multiple tests example
test.describe("Nav to page Forms: ", () => {
    test.beforeEach("Nav to page Forms: ", async ({page} )    => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})
    test('Input field: ', async ({page}) => {
        const emailInput = page.locator('nb-card', {hasText: 'Using the Grid'}).getByText('Email');

        await emailInput.fill('khanhleduy99er@gmail.com');
        await emailInput.clear();
        await emailInput.pressSequentially('khanhdeptraivcl@gmail.com', {delay: 200})

        const textEmailInput = emailInput.inputValue();
        expect(textEmailInput).toEqual('khanhdeptraivcl@gmail.com')
    })
})  
