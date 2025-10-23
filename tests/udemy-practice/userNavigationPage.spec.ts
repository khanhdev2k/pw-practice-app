import  {test, Page} from '@playwright/test';
import { NavigationPage } from '../../page-object/udemy-practice-pom/navigationPage';

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:4200/");
})

test("User Navigation: ", async ({page}) => {
    const navigateToForms = new NavigationPage(page);
    navigateToForms.navigateToForms();
    // navigateToForms.smartTablePage();
})
