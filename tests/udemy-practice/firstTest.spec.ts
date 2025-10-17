import {test, expect} from '@playwright/test';


test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:4200/");
})

// multiple tests example
test.describe("Nav to page Forms: ", () => {
    test.beforeEach("Nav to page Forms: ", async ({page} )    => {
    await page.getByText('Forms').click();
})
    test('Nav to datepicker page', async ({page}) => {
        await page.getByText('Datepicker').click();
    })
})  

test.describe("Nav to page Components: ", () => {
    test.beforeEach("Nav to page Forms: ", async ({page} )    => {
    await page.getByText('Extra Components').click();
})
test('Nav to Calendar page', async ({page}) => {
    await page.getByText('Calendar').first().click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    })
})  
