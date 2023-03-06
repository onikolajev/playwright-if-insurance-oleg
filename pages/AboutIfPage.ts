import { expect, Page, Locator } from "@playwright/test";

export class AboutIfPage {
  readonly page: Page;
  readonly vacanciesBtnLv: Locator;
  readonly vacancyHeaderElem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.vacanciesBtnLv = this.page.locator('#hero a:has-text("Vakances")');
    this.vacancyHeaderElem = this.page.locator(`h1[class="if heading large"]`);
  }

  async open() {
    await this.page.goto("https://www.if.lv/par-if");
  }

  async selectSectionLV(
    sectionTitle: "Par mums" | "Darbs If" | "Medijiem" | "Atsauksmes"
  ) {
    await this.page
      .locator(`#main-navigation a:has-text("${sectionTitle}")`)
      .click();
  }

  async clickOnVacanciesBtnLV() {
    await this.vacanciesBtnLv.click();
  }

  async selectVacancyLV(
    vacancy:
      | "Pricing Innovations Analyst"
      | "Pricing Analyst (Actuary)"
      | "Junior Actuary"
      | "Active Directory Service Responsible"
      | "Service Responsible for Microsoft Exchange"
      | "Application Security Engineer"
      | "Lead Solution Architect"
      | "Technical Architect"
      | "Senior Identity and Access Management Engineer"
      | "System Support Engineer"
      | "Senior System Support Engineer"
      | "Test Automation Specialist"
      | "Quality Assurance Specialist"
      | "Senior Software developer"
      | ".NET Developer"
      | "Front-end developer"
  ) {
    // Yes, I agree that this is not the best locator, but in my defense, the click events were getting interecepted by "Read me" element, and framework not happy

    let elem = await this.page.locator(
      `li[class="if navigational-card lifestyle"]`,
      {
        has: this.page.locator(`span[class="if title"]:has-text("${vacancy}")`),
      }
    );
    await elem.click();
  }

  async assertVacancyHeader(vacancy: string) {
    await expect(this.vacancyHeaderElem).toContainText(vacancy);
  }
}
