class Loginpage{
    constructor(page){
        this.page = page;
        this.username=page.locator('id=username');
        this.password=page.locator('id=password');
        this.loginbtn=page.locator('#login');

    }

    async goTo() {
        await this.page.goto('https://adactinhotelapp.com/');

    }

    async login(Uname, Pass){
        await this.username.fill(Uname);
        await this.password.fill(Pass);
        await this.loginbtn.click();
    }
}

module.exports={Loginpage}