import {expect, Page, Locator} from '@playwright/test'

export class HomePage{
    readonly page: Page 

    constructor (page: Page){
        this.page = page
    }

    async open(){
        await this.page.goto('https://www.if.lv/')
    }


}