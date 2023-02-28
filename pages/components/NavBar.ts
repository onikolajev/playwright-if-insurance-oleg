import { expect, Locator, Page } from "@playwright/test";

export class NavBar {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectSectionLV(
    sectionTitle: "Privātpersonām" | "Uzņēmumiem" | "Par If"
  ) {

    await this.page.getByRole('banner').getByRole('link', { name: sectionTitle }).click();
  }
}
