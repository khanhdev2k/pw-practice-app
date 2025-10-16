import {test, expect} from '@playwright/test';

// single test example
test("The first test: ", ({page} )    => {
    page.goto("https://playwright.dev/");

})

// multiple tests example
test.describe("The first test suite: ", () => {
    test("The first test: ", ( )    => {})
    test("The second test: ", ( )    => {})
})