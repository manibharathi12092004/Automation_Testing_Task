export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
    }

    async ClickPIMMenu() {
        await this.pimMenu.click();
    }
}