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

    test('Radio button: ', async ({page}) => {
        const opt1 = page.locator('nb-card', {hasText: 'Using the Grid'}).getByLabel('Option 1');
        const opt2 = page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('radio', {name: 'Option 2'});   
        const optDisabled = page.locator('nb-card', {hasText: 'Using the Grid'}).getByLabel('Disabled Option');

        await opt1.click({force: true});
        
        expect (opt1).toBeTruthy();
        expect(opt2).not.toBeTruthy();
        expect (optDisabled).toBeDisabled();

    })
})  

test.describe("Nav to Modal & Overlays", () => {
    test.beforeEach("Nav to page Forms: ", async ({page} )    => {
    
})
    test('CheckBoxes: ', async ({page}) => {
        await page.getByText('Modal & Overlays').click();
        await page.getByText('Toastr').click();
        await page.getByText('Hide on click').uncheck({force: true});
        await page.getByText('Prevent arising of duplicate toast').check();

        // const allBoxes = page.getByRole('checkbox');
        // for( const box of await allBoxes.all({force: true})){
        //     await box.check();
        //     expect(await box.isChecked()).toBeTruthy();
        // }
    })

    test('Drop down list: ', async ({page}) => {
        const dropdown = page.locator('ngx-header nb-select');
        await dropdown.getByRole('button').click();
        await page.waitForTimeout(2000);

        const listItem = page.locator('nb-option-list nb-option');
        await listItem.getByText('Dark').click();
    })

    test('Web table: ', async ({page}) => {
        await page.getByText('Tables & Data').click();
        await page.getByText('Smart Table').click();
    })
})
    