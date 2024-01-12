import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apollopharmacy.in/');
  await page.getByRole('banner').locator('span').nth(2).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('8220736982');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('990056');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Personal Care' }).first().click();
  await page.locator('div').filter({ hasText: /^₹17\.48 extra cashbackMRP\(₹699\)₹349\.50 Add to Cart$/ }).getByRole('button').click();
  await page.getByRole('banner').getByText('1').click();
  await page.getByLabel('Cart Icon').click();
  await page.getByRole('heading', { name: 'Nivea Body Milk Nourishing' }).click();
  await expect(page.locator('h1')).toContainText('Nivea Body Milk Nourishing Moisturising Lotion for Dry Skin, 600 ml');
  await expect(page.getByRole('heading', { name: 'Nivea Body Milk Nourishing' })).toBeVisible();
});