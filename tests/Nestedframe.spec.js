const { test, expect } = require('@playwright/test');

test('Nestedframe title', async ({ page }) => 
{
  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  const parentFrame = await page.frameLocator("//frame[@name='frame-top']");
  const leftFrame = await parentFrame.frameLocator('frame[name="frame-left"]').locator('body');
  console.log(leftFrame.textContent());

  const middleFrame = await parentFrame.frameLocator('//frame[@name="frame-middle"]').locator('body');
  console.log(middleFrame.textContent());

  const rightFrame = await parentFrame.frameLocator('//frame[@name="frame-right"]').locator('body');
  console.log(rightFrame.textContent());

}
);