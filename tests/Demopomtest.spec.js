const { test, expect } = require('@playwright/test');
const { DemoLoginpage } = require('../Pages/DemoLoginpage');
const { DemoHomepage } = require('../Pages/DemoHomepage');
const { DemoCartpage } = require('../Pages/DemoCartpage');

test('DemoBlaze', async ({ page }) => {
    
    //Login
      const login = new DemoLoginpage(page);
      await login.gotoLoginpage();
      await login.loginBtn('Anandpak','test@123')
      await page.waitForTimeout(3000)
      //await login.sshot();

    //Home
      const home = new DemoHomepage(page);
      await home.addProductToCart("Nexus 6");
      await page.waitForTimeout(3000)
      await home.gotoCart();
     

    //Cart
     const cart = new DemoCartpage(page);
     await page.waitForTimeout(3000)
     const status = await cart.checkProductInCart('Nexus 6');
     expect(await status).toBe(true);
     



  });

