import {test} from '@playwright/test';
import { PageManager } from '../../page-object/mock-pom/pagaManager';


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
        
        // Chờ API /sessions đồng thời với action kích hoạt (click Launch)
        const { response, body } = await pageManager.getNavPage().waitForSessionResponse({
            trigger: () => pageManager.getNavPage().runGameOanTuTi(),
            timeoutMs: 40_000
        });
        const saved = pageManager.getNavPage().saveJsonIntoData('session.json', body, 'data');
        console.log('✅ Session saved to:', saved);
    })
})