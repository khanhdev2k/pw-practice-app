import { Page} from '@playwright/test';

export class NavigationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToForms() {
        await this.page.waitForURL('**/pages/iot-dashboard');
        await this.page.getByText('Forms').click();
        await this.page.getByText('Form Layouts').click();
    }

    // async smartTablePage( ){
    //     await this.selectGrMenuItem('Modal & Overlays');
    //     await this.page.getByText('Smart Table').click();
    // }

    // private async selectGrMenuItem(menuItem: string) {
    //     const grMenuItem = this.page.getByTitle(menuItem)
    //     const expanedState = await grMenuItem.getAttribute('aria-expanded');
    //     if(expanedState === 'false') {
    //         await grMenuItem.click();
    //     }
    // }
}