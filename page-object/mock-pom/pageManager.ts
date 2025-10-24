import { Page } from "@playwright/test";    
import { NavPage } from "./navPage";
import { Helper } from "./helper";

export class PageManager {
    private readonly page: Page
    private readonly navPage: NavPage
    private readonly helper: Helper
    
    constructor(page: Page) {
        this.page = page;
        this.navPage = new NavPage(this.page);
        this.helper = new Helper(this.page);
    }

    getNavPage(){
        return this.navPage
    }

    getHelper(){
        return this.helper
    }

}