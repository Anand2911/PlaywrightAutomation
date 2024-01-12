class DemoLoginpage {
    constructor(page) {
    this.page = page;
    this.loginLink = '//*[@id="login2"]';
    this.usernameInput = '//*[@id="loginusername"]';
    this.passwordInput = '//*[@id="loginpassword"]';
    this.loginButton = '//button[text()="Log in"]';
    this.logInModal = '//div[@id="logInModal"]';
    this.narvbarx ='//nav[@id="narvbarx"]';
    this.cartpage = '//tbody[@id="tbodyid"]';
}

async gotoLoginpage(){
    await this.page.goto('https://www.demoblaze.com/');
}

async loginBtn(username, password){
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
    
}
// async sshot(){
//     await this.screenshot({ path: 'Login_screenshot.png' });
//     await this.screenshot({ path: 'Home_screenshot.png' , fullPage: true});
//     await this.screenshot({ path: 'Cart_screenshot.png' , fullPage: true});
//}
}

module.exports={DemoLoginpage}