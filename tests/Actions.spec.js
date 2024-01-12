const { test, expect } = require('@playwright/test');

test.skip('Google title', async ({ page }) => 
{
  await page.goto('https://www.google.com');

  await page.locator('//*[@id="APjFqb"]').type('selanium');
  await page.locator('//*[@id="APjFqb"]').press('Control+KeyA+Backspace');
  await page.locator('//*[@id="APjFqb"]').type('Playwright');
  await page.locator('//*[@id="APjFqb"]').press('Enter');

}
);

test('MouseAction title', async ({ page }) => 
{
  await page.goto('https://www.amazon.in/');
  await page.locator('//form[@id="nav-search-bar-form"]').hover();
  await page.locator('//form[@id="nav-search-bar-form"]').dblclick();
  await page.goto('https://www.amazon.in/');
  await page.locator('//form[@id="nav-search-bar-form"]').click({button: 'right'});
  await page.locator('//form[@id="nav-search-bar-form"]').click({modifiers: ['Shift']});//open new link in new tab 
  await page.locator('//form[@id="nav-search-bar-form"]').click({position: {x: 37, y:45}});//like offset 

});