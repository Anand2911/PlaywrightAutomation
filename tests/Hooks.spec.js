const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');

test.beforeEach('Hooks title', async ({ page }) => 
{
  await page.goto('https://adactinhotelapp.com/');
}
);

test('Login', async({page})=>{

    await expect(page).toHaveTitle(/Adactin.com - Hotel Reservation System/);
  await page.locator('//input[@id="username"]').fill('Anandpak');
  await page.locator('//input[@id="password"]').fill('7C5Y2K');
  await page.locator('//input[@id="login"]').click();
})

test('Search Hotel Page', async({page}) =>{
    await page.locator('//input[@id="username"]').fill('Anandpak');
    await page.locator('//input[@id="password"]').fill('7C5Y2K');
    await page.locator('//input[@id="login"]').click();
    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({index:1});
    await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'});
    await page.locator('//select[@id="room_nos"]').selectOption('2');
    await page.locator('//select[@id="adult_room"]').selectOption('2');
    await page.locator('//input[@id="Submit"]').click;
})

test.afterEach('After each', async({page})=>{

    //console.log(`Finished $(testInfo.title) with status $(testInfo.status)`);

    console.log(`Finished ${testInfo.title}`);
    console.log(`Status ${testInfo.status}`);
})

test.beforeAll('Before All', async({browser})=>{
 
    const context = await browser.newContext();
    const page = await context.newPage();
     
     
    })

test.afterAll('after all', async({page})=>{

  await browser.close();
})