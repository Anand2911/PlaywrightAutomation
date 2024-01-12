const { test, expect } = require('@playwright/test');

test('Browser contex', async ({ browser }) => 
{

const context = await browser.newContext();
const page = await context.newPage();
await browser.goto('https://adactinhotelapp.com/');
await expect(page).toHaveTitle(/Adactin.com - Hotel Reservation System/); 

await context.close();
}

);