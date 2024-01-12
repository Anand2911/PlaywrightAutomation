const { test, expect } = require('@playwright/test');

test.skip('Alert title', async ({ page }) => 
{
  await page.goto('http://autopract.com/selenium/alert5/');
  await page.on('Alert',async dialog => {
     expect (dialog.type()).toContain('Alert');
     expect (dialog.message()).toContain('This is Alert Box.');
     await dialog.accept();
  });
  await page.locator('//button[@id="alert-button"]').click();
  await page.waitForTimeout(3000);
  await expect(page.locator('//p[@id="msg"]')).toHaveText('You clicked on Ok button.');
}
);

test.only('Alert confirm', async({page})=>{
    await page.goto('http://autopract.com/selenium/alert5/');
  await page.on('Alert',async dialog => {
     expect (dialog.type()).toContain('confirm');
     expect (dialog.message()).toContain('This is Alert Box.');
     //await dialog.accept();
     await dialog.dismiss();
  });
  await page.locator('//button[@id="confirm-button"]').click();
  await page.waitForTimeout(3000);
  await expect(page.locator('//p[@id="msg"]')).toHaveText('Save Canceled!');
});

test.skip('Alert3', async({page})=>{
    await page.goto('http://autopract.com/selenium/alert5/');
  await page.on('dialog', async dialog => {
     expect (dialog.type()).toContain('prompt');
     expect (dialog.message()).toContain('Please enter any number');
     await dialog.accept('10');
     //await dialog.dismiss();
  });
  await page.locator('//button[@id="prompt-button"]').click();
  await page.waitForTimeout(3000);
  await expect(page.locator('//p[@id="msg"]')).toHaveText('You have entered number: 10');
});