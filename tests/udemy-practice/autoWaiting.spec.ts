import {test, expect} from '@playwright/test';
import { NavPage } from '../../page-object/mock-pom/navPage';

let navPage: NavPage;

test.beforeEach(async ({page}) => {
    navPage = new NavPage(page);
    await navPage.navToMockUrl();
})
test.describe("Login page: ", () => {
    test.beforeEach('Login with Mock wallet', async ({page}) => {
        // navPage is created in the top-level beforeEach
        await navPage.qaLogin();
        await navPage.loginWithTestUser();
    })

    test('Timeout example', async ({page}) => {
        await navPage.runGameOanTuTi();
    })
})