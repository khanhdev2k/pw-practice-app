import { test, expect } from '@playwright/test'

test.beforeEach('Navigate to browser', async ({page}) => {
    await page.goto('http://localhost:4200/');
})

test.describe('Template action with element on the form', async () => {
    test.beforeEach('Nav to Forms first', async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('Basic form', async ( {page}) => {
        await page.locator('#exampleInputEmail1').fill('khanhleduy99er@gmail.com');
        await page.locator('#exampleInputPassword1').fill('khongvietpass');
    })

    test('Get by using facing locator', async ({page}) => {
        await page.getByLabel('Email').first().fill('fakeEmail@gmail.com')
        await page.getByLabel('Password').first().fill('hembit')
        await page.getByTitle('IoT Dashboard').click()
    })
})

test.describe('Template action with element catch with CSS and xpath', async () => {
    test.beforeEach('Nav to Forms first', async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('Action with basic Forms', async ({page}) => {
        await page.locator('nb-card').filter({hasText: 'Basic form'}).getByPlaceholder('Email').fill('test@test.com')
        await page.locator('nb-card').filter({hasText: 'Basic form'}).getByPlaceholder('Password').fill('testpassword')
        await page.locator('nb-card').filter({hasText: 'Basic form'}).locator('nb-checkbox').click()
        await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('button').click()
    })

    test('Re-use locator in code', async ({page}) => {
        const baseForm = page.locator('nb-card').filter({hasText: 'Block form'})

        await baseForm.locator('#inputFirstName').fill('khanh da cang')
        await baseForm.locator('#inputLastName').fill('Khong co gi ca')
        await baseForm.locator('#inputEmail').fill('testblockform@gmail.com')
        await baseForm.locator('#inputWebsite').fill('https://google.com')
        await baseForm.getByRole('button').click()
    })
})