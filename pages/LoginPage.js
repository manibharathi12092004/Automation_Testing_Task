
import { userName, Password, LoginButton, url } from "../pageObjects/LoginPageObjects";
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator(userName);
        this.password = page.locator(Password);
        this.loginButton = page.getByRole(LoginButton.role, { name: LoginButton.Name });
    }

    async OpenLoginPage() {
        await this.page.goto(url);
        await this.page.waitForTimeout(2000);
    }

    async CaptureLoginScreenshot() {
        await this.page.screenshot({ path: './test-results/LoginPage.png', fullPage: true });
    }

    async Login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click({ waitUntil: 'domcontentloaded' });
    }


}