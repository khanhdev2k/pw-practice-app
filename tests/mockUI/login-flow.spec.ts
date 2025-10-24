import {test} from '@playwright/test';
import { PageManager } from '../../page-object/mock-pom/pageManager';


test.beforeEach(async ({page}) => {
    const pageManager = new PageManager(page);
    await pageManager.getNavPage().navToMockUrl();
})

test.describe("Login page: ", () => {
    test.beforeEach('Login with Mock wallet', async ({page}) => {
        const pageManager = new PageManager(page);
        await pageManager.getNavPage().qaLogin();
        await pageManager.getNavPage().loginWithTestUser();
    })

    test('Login with account: ' + 'VNQA_KL001_TZS', async ({page}) => {
        const pageManager = new PageManager(page);
        await pageManager.getNavPage().runGameOanTuTi();
        await pageManager.getNavPage().testUserLogin();
        await pageManager.getHelper().waitForSessionResponse(`session${'TZS'}.json`, );
    })
})

