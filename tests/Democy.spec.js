const { test, expect } = require('@playwright/test');

test('Demo Cyclos title', async ({ page }) => 
{
  await page.goto('https://demo.cyclos.org/ui/login');
  await page.locator('//input[@placeholder="User"]').fill('demo');
  await page.locator('//input[@placeholder="Password"]').fill('1234');
  await page.locator('//span[normalize-space()="Submit"]').click;
  await page.locator('//div[contains(text(),"Dashboard")]').click;
  console.log(await page.locator('//div[@class="page-content-body card-body d-flex flex-column"]').textContent());
  await page.locator('//a[@id="menu_banking"]//icon//*[name()="svg"]').click;
  await page.locator('a[class="nav-item active"]').click;
 await page.locator('//input[@class="form-control text-right ng-pristine ng-valid ng-touched"]').fill('1234');
 
  
  
}
);