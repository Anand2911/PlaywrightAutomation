const { test, expect } = require('@playwright/test');

test('Adactin title', async ({ page }) => 
{
  await page.goto('https://adactinhotelapp.com/');
  await expect(page).toHaveTitle(/Adactin.com - Hotel Reservation System/);
  await page.locator('//input[@id="username"]').fill('Anandpak');
  await page.locator('//input[@id="password"]').fill('7C5Y2K');
  await page.locator('//input[@id="login"]').click();
  //const err = await (await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
 // expect(err).toBe('Invalid Login details or Your Password might have expired. Click here to reset your password');

  const loc = await (await page.locator('//input[@id="username_show"]').getAttribute('value') );
  expect(loc).toBe('Hello Anandpak!');

  await page.locator('//select[@id="location"]').selectOption('Sydney');
  await page.locator('//select[@id="hotels"]').selectOption({index:1});
  await page.locator('//select[@id="room_type"]').selectOption({label:'Standard'});
  await page.locator('//select[@id="room_nos"]').selectOption('2');
  await page.locator('//select[@id="adult_room"]').selectOption('2');
  await page.locator('//input[@id="Submit"]').click;
  await page.check('//input[@id="radiobutton_0"]');
  await page.locator('//input[@id="continue"]').click;
  await page.locator('//input[@id="first_name"]').fill('Anand');
  await page.locator('//input[@id="last_name"]').fill('kumar');
  await page.locator('//textarea[@id="address"]').fill('Chennai');
  await page.locator('//input[@id="cc_num"]').fill('1234567891234567');
  await page.locator('//select[@id="cc_type"]').selectOption('American Express');
  await page.locator('//select[@id="cc_exp_month"]').selectOption({index:1});
  await page.locator('//select[@id="cc_exp_year"]').selectOption('2023');
  await page.locator('//input[@id="cc_cvv"]').fill('123');
  await page.locator('//input[@id="book_now"]').click;

  await page.locator('//a[normalize-space()="Booked Itinerary"]').click;
await page.locator('(//input[@type="checkbox"])[2]').click;
await page.check('(//input[@type="checkbox"])[3]');
await page.uncheck('(//input[@type="checkbox"])[3]');

expect(await page.locator('(//input[@type="checkbox"])[2]').ischecked()).toBeTruthy();
expect(await page.locator('(//input[@type="checkbox"])[3]').ischecked()).toBeFalsy();

const allText = await page.locator("selector").allTextContents();

}
);