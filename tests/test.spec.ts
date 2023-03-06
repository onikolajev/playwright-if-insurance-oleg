import { test, expect } from "@playwright/test";
import { NavBar } from "../pages/components/NavBar";
import { HomePage } from "../pages/HomePage";
import { AboutIfPage} from "../pages/AboutIfPage"
import {CookieBanner} from "../pages/components/CookieBanner"

test.describe("If insurance > About page", () => {
  let navBar: NavBar;
  let homePage: HomePage;
  let aboutIfPage: AboutIfPage
  let cookieBanner : CookieBanner

  test.beforeEach(async ({ page }) => {
    navBar = new NavBar(page);
    homePage = new HomePage(page);
    aboutIfPage = new AboutIfPage(page)
    cookieBanner = new CookieBanner(page)

    await homePage.open();
    await cookieBanner.acceptCookies();
  });

  test("Open \"Quality Assurance Specialist\" vacancy, and check the header", async ({ page }) => {
    await navBar.selectSectionLV("Par If");
    await aboutIfPage.selectSectionLV("Darbs If")
    await aboutIfPage.clickOnVacanciesBtnLV()
    await aboutIfPage.selectVacancyLV("Quality Assurance Specialist")
    await aboutIfPage.assertVacancyHeader("Quality Assurance/Test Automation Specialist")
  });


  test("Open \"Technical Architect\" vacancy, and check the header", async ({ page }) => {
    await navBar.selectSectionLV("Par If");
    await aboutIfPage.selectSectionLV("Darbs If")
    await aboutIfPage.clickOnVacanciesBtnLV()
    await aboutIfPage.selectVacancyLV("Technical Architect")
    await aboutIfPage.assertVacancyHeader("Technical Architect")
  });

});
