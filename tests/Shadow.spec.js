const { test, expect } = require('@playwright/test');
const { Console } = require('console');

test('Shadow elements', async ({ page }) => 
{
  await page.goto('http://autopract.com/selenium/shadowdom1/');
 //console.log(await page.locator('.target1.button').textContent());
 console.log(await page.locator('.target2.button').textContent());
 console.log(await page.locator('.target3.button').textContent());
 console.log(await page.locator('.target1.button').first().textContent());
 console.log(await page.locator('.target1.button').nth(1).textContent());
 console.log(await page.locator('.target1.button').last().textContent());
 
 console.log(await page.locator(':light(.target1.button)').last().textContent());
}
);