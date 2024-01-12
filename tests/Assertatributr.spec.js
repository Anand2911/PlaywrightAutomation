const { test, expect } = require('@playwright/test');

test('Adactin title', async ({ page }) => 
{
//   await page.goto('https://adactinhotelapp.com/');
//   await expect(page.locator('id=username')).toHaveAttribute('class', 'login_input' );
//   await expect(page.locator('id=username')).toHaveAttribute('class', /input/ );
//   await expect(page.locator('id=username')).toHaveAttribute('value', '' );
//   await expect(page.locator('id=username')).toHaveClass('login_input' );

  await expect.soft(page.locator('id=username')).toHaveAttribute('class', 'login_input' );
  await expect(page.locator('id=username')).toHaveAttribute('class', /input/ );
  await expect(page.locator('id=username')).toHaveAttribute('value', '' );
  await expect(page.locator('id=username')).toHaveClass('login_input' );
}
);