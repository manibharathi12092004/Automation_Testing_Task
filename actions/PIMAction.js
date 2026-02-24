import { DashboardPage } from "../pages/DashboardPage";
import { PIMPage } from "../pages/PIMPage";
export class PIMAction {
    constructor(page) {
        this.dashboardPage = new DashboardPage(page);
        this.pimPage = new PIMPage(page);
    }

    async openPIMandValidate() {
        await this.dashboardPage.ClickPIMMenu();
        await this.pimPage.validatePIMPage();
    }
}