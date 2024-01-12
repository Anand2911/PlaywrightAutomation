import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Anandpak');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@2911');
  await page.getByRole('button', { name: 'Log in' }).click();
});