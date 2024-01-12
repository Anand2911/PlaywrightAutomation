const { test, expect } = require('@playwright/test');

test('Visual title', async ({ browser }) => 
{
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto('https://adactinhotelapp.com/');
 await expect(await page.screenshot()).toMatchSnapshot('loginpage_'+Date.now()+'.png');
}
);