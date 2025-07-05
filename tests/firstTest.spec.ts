import { test, expect } from '@playwright/test';
import { asyncScheduler } from 'rxjs';


test.beforeEach('Nav to form page',async({page}) => {
  await page.goto('http://localhost:4200/');
})

test.describe('Hanlde UI fill text in Forms', async () => {

  test.beforeEach('Nav to Forms first', async ({page}) => {
    await page.getByText('Forms').click()
  })

    test('Hanlde Incline form', async ({page}) => {
      await page.locator("//input[@placeholder='Jane Doe']").fill('khanhleduy')
      await page.locator("//input[@placeholder='Email']").fill('khanhleduy99er@gmail.com')
      await page.locator("//span[@class='custom-checkbox checked']").click()
    })

  test('Locator syntax rules', async ({page}) => {
    // by tagName
    page.locator('input').click()

    // by Id
    page.locator('#inputEmail')

    // by class value
    page.locator('.email')

    // by attribute
    page.locator("[placeholder='Email]")

    // by full Class value
    page.locator("[class='custom-checkbox']")

    // combine with each other method
    page.locator("[class='input-full-width size-medium status-basic shape-rectangle nb-transition'][input]")

    // by xpath (is not recommened by Playwright)
    page.locator("//*input[@class='email']")

    // by partical text match
    page.locator(':text("Using)')

    // by exactly text
    page.locator(':text-is("Using the Grid")')
  })
})

test.describe('User facing locator',  async () => {
  test.beforeEach('Nav to Forms first', async ({page}) => {
    await page.getByText('Forms').click()
  })

  test('Hande locator with user facing:', async ({page}) => {
    await page.locator('#inputEmail1').fill('xinchao@gmail.com')
    await page.locator('#inputPassword2').fill('coconcac')
    await page.getByLabel('Option 1').click()
  })
})

