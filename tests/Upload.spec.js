const { test, expect } = require('@playwright/test');

test('Upload title', async ({ page }) => 
{
//   await page.goto('http://autopract.com/selenium/upload2/');
//   //await page.locator('//a[@id="pickfiles"]').setInputFiles('test.txt');
// //   await page.setInputFiles('//a[@id="pickfiles"]','test.txt');
// //   await page.locator('//a[@id="uploadfiles"]').click();

await page.goto('http://autopract.com/selenium/upload2/');
const [fileChooser] = await Promise.all([
    page.waitForEvent('fileChooser'), 
    page.locator('//a[@id="pickfiles"]').click
])


//await fileChooser.setFiles('test/1.txt');
await fileChooser.setFiles({name:'file.txt', MimeType:'test/1.txt', buffer: Buffer.from('This is sample file')});
await page.locator('//a[@id="uploadfiles"]').click();
  
});