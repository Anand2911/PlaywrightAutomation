const { test, expect } = require('@playwright/test');
const {Loginpage} = require('../Pages/Loginpage');
const {Searchpage} = require('../Pages/Searchpage');

test('Loginpage', async ({ page }) => 
{
    const name="Anandpak";
    const pwd="7C5Y2K";

    const lognpge = new Loginpage(page);
    await lognpge.goTo();
    await lognpge.login(name,pwd);
 
}
);

test('Searchpage', async({page}) =>{
    const nameCity ='Sydney';
    const nameHotel = 'Hotel Creek"';
    const typeRoom = 'Standard';
    const nosRoom = '2 - Two';

    const searpge = new Searchpage(page);
    await searpge.searchHotel(nameCity,nameHotel,typeRoom,nosRoom);

})