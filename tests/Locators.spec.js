const { test, expect } = require('@playwright/test');

test('AMAZON title', async ({ page }) => 
{
  await page.goto('https://www.amazon.in/');
  await page.getByRole("link",{name:"Hello, sign in Account & Lists"}).click();
  await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill('8220736982');
  await page.getByRole("button",{name:"Continue"}).click();
  //await expect(page.locator('//input[@id="ap_email"]').toHaveText('Email or mobile phone number'));

 
}
);