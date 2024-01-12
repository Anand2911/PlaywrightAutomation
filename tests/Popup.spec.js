const { test, expect } = require('@playwright/test');

test('Popup title', async ({ page }) => 
{
  await page.goto('http://autopract.com/selenium/popup/');

  const [newPopup] = await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('//a[@target="popup"]').click()])

    await newPopup.waitForLoadState();
    console.log(await newPopup.title());

    await newPopup.locator('//a[normalize-space()="About Us"]').click();
    await expect(newPopup).toHaveTitle('About Us');
}
);