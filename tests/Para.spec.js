const { test, expect } = require("@playwright/test")

const Credential = [
    {login: 'Anandpak', password: '7C5Y2K'  },
    {login: 'misr82hn02', password:'misr82hn02'},

]
for(const loginId of Credential)
{
        test(`testing with ${loginId.login}`, async({page})=>
        {
            await page.goto('https://adactinhotelapp.com/');
            await page.locator('//input[@id="username"]').fill(loginId.login);
            await page.locator('//input[@id="password"]').fill(loginId.password);
            await page.locator('//input[@id="login"]').click();
            await expect(page).toHaveTitle("Adactin.com - Search Hotel");    
        
        })
}
    
