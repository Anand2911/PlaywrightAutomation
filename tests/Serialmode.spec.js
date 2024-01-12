const { test, expect } = require('@playwright/test');
//test.describe.configure({mode:'serial'});

let page;
test.beforeAll('Before All', async({browser})=>{
  //const page = await context.newPage();
  page = await browser.newPage();
    })

test('Run 1', async()=>{
    await page.goto('https://adactinhotelapp.com/');
})

test('Run 2', async()=>{
    await page.locator('//input[@id="username"]').fill('Anandpak');
    await page.locator('//input[@id="password"]').fill('8220736982');
  await page.locator('//input[@id="login"]').click();
})

test('Run 3', async()=>{
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

test.afterAll('After All', async()=>{
    await page.close();
})
