import { LoginPage } from "../pages/LoginPage";
import LoginData from "../testdata/loginData.json";

export class LoginAction {
    constructor(page) {
        this.loginPage = new LoginPage(page);
    }

    async openAndCapture() {
        await this.loginPage.OpenLoginPage();
        await this.loginPage.CaptureLoginScreenshot();
    }

    async login() {
        await this.loginPage.OpenLoginPage();
        await this.loginPage.Login(LoginData.username, LoginData.password);
    }
}
