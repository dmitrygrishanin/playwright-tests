import { test } from '@playwright/test';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('Main page tests', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Check visibility of elements on the header page', async () => {
    await mainPage.checkElementsVisibility();
  });

  test('Check titles of elements on the header page', async () => {
    await mainPage.checkElementsText();
  });

  test('Check href attribute values of elements on the header page', async () => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Check switching light mode', async () => {
    await test.step('Click on the switch mode icon', async () => {
      await mainPage.clickSwitchModeIcon();
    });
    await test.step('Check data-theme attribute value after switching to light mode', async () => {
      await mainPage.checkDataThemeAttributeValue('light');
    });
    await test.step('Click on the switch mode icon again', async () => {
      await mainPage.clickSwitchModeIcon();
    });
    await test.step('Check data-theme attribute value after switching back to dark mode', async () => {
      await mainPage.checkDataThemeAttributeValue('dark');
    });
  });

  test('Check style of active light mode', async () => {
    await test.step('Set light mode', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Check layout with light mode', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test('Check style of active dark mode', async () => {
    await test.step('Set dark mode', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Check layout with dark mode', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
