const { test, expect } = require("@playwright/test")
const path = require('path');
require('dotenv').config({

    path: path.join(__dirname,"../.env"),
   
}); 

test(`test with ${process.env.LOGIN}`, async({page})=>{

    console.log(process.env.LOGIN, process.env.PASSWORD);
    await page.goto(process.env.WEB_URL);
  await expect(page).toHaveTitle(/Adactin.com - Hotel Reservation System/);
  await page.locator('//input[@id="username"]').fill(process.env.LOGIN);
  await page.locator('//input[@id="password"]').fill(process.env.PASSWORD);
  await page.locator('//input[@id="login"]').click();
})