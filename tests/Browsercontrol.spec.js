const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('dns');

test('Browser control', async ({ page }) => 
{
await page.goto('https://google.com');
await page.goto('https://adactinhotelapp.com/');
await page.goBack();
await expect(page).toHaveTitle(/Google/);
await page.goForward();
await expect(page).toHaveTitle(/Adactin.com - Hotel Reservation System/);   
}

);