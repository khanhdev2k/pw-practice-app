import { Page } from "@playwright/test";    
import { NavPage } from "./navPage";

export class PageManager {
    private readonly page: Page
    private readonly navPage: NavPage
    
    constructor(page: Page) {
        this.page = page;
        this.navPage = new NavPage(this.page);
    }

    getNavPage(){
        return this.navPage
    }

}