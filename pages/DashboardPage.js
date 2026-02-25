import { PIMMenu } from "../pageObjects/DashboardPageObjects";
export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.getByRole(PIMMenu.role, { name: PIMMenu.Name });
    }

    async ClickPIMMenu() {
        await this.pimMenu.click({ waitUntil: 'domcontentloaded' });
    }
}