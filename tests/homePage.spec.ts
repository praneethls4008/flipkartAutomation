import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { readTestDataFromJson } from "../utlis/dataUtils";

const testData = readTestDataFromJson('homePage.json')

test.describe('searchProduct', ()=>{
    testData.productName.forEach((data)=>{
        test(`searchFucntionality: ${data}`, async({page})=>{
            const homePage = new HomePage(page)
            await homePage.navigate()
            await homePage.searchProduct(data)
            expect(page.url()).toContain('search')
            //await page.screenshot({ path: `../fullpageSS/${data}ss.png`, fullPage: true });
        })
    })
})