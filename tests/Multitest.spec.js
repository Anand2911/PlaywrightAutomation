const { test, expect } = require('@playwright/test');

test('Demoblaze', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.locator('//a[@id="login2"]').click();
    await page.locator('//input[@id="loginusername"]').fill('Anandpak');
    await page.locator('//input[@id="loginpassword"]').fill('test@123');
    await page.locator('//button[text()="Log in"]').click();
    await expect(page.locator('//a[@id="nameofuser"]')).toHaveText('Welcome Anandpak');
    await expect(page).toHaveTitle(/STORE/);
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('//a[normalize-space()="Add to cart"]').click();

    await page.on('dialog', async dialog =>{
        expect (dialog.message()).toContain('added');
            await dialog.accept(); 
    })
    await page.locator('//a[@id="cartur"]').click;
    console.log(await page.locator('//a[@id="cartur"]').textContent());
    await page.waitForTimeout(3000);
    await page.locator('//button[normalize-space()="Place Order"]').click;
    console.log(await page.locator('//label[@id="totalm"]').textContent());
    // await page.locator('//input[@id="name"]').fill('Anand');
    // await page.locator('//input[@id="country"]').fill('Chennai');
    // await page.locator('//input[@id="card"]').fill('1234567899876543');
    // await page.locator('//input[@id="month"]').fill('2');
    // await page.locator('//input[@id="year"]').fill('2023');
    // await page.locator('//button[normalize-space()="Purchase"]').click();
});