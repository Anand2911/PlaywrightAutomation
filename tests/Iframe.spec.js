const { test, expect } = require('@playwright/test');

test('Iframe title', async ({ page }) => 
{
  //await page.slow(30);
  await page.goto('http://autopract.com/selenium/iframe1/');

  await page.screenshot({path: 'Screenshot/screenshot_'+Date.now()+'.png', fullPage:true});

  //const myFrame= page.frame("testframe");
  //const myFrame = page.frame({name:"testframe"});
  //const myFrame = page.frame({url:"http://autopract.com/selenium/form1/"});
  const myFrame = page.frame({url:/form1/});
  await myFrame.locator("//input[@class='form-control'][2]","Anand");
  //await myFrame.locator("//input[@class='form-control'][1]").screenshot({path: 'Screenshot/screenshot_'+Date.now()+'.png', fullPage:true});
  await myFrame.locator('//input[@class="form-control"]').nth(1).fill("kumar@gmail.com");

}
);
