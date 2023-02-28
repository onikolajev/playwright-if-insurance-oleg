import { expect, Locator, Page } from "@playwright/test";

export class CookieBanner {
  readonly page: Page;
  readonly acceptBtn: Locator

  constructor(page: Page) {
    this.page = page;
    this.acceptBtn = this.page.locator('#onetrust-accept-btn-handler')
  }

  async acceptCookies(){
    await this.acceptBtn.click()
}
}
