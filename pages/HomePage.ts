import { Page, Locator } from "@playwright/test";

export class HomePage{
    readonly page: Page
    readonly searchInput: Locator
    readonly searchButton: Locator

    constructor(page: Page){
        this.page = page
        this.searchInput = page.locator("//input[@name='q']")
        this.searchButton = page.locator("//button[@type='submit']")
    }

    async navigate(){
        await this.page.goto('/')
    }

    async searchProduct(productName: string){
        await this.searchInput.fill(productName)
        await this.searchButton.click();
    }





}