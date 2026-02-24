import { expect } from "@playwright/test";

export class EmployeeListPage {
    constructor(page) {
        this.page = page;
        this.employeeList = page.getByRole('link', { name: 'Employee List' });
        this.searchID = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async openEmployeeList() {
        await this.employeeList.click();
    }

    async searchEmployeeByID(employeeID) {
        await this.searchID.fill(employeeID);
        await this.page.waitForLoadState('domcontentloaded');
        await this.searchButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async validateEmployee(employeeID) {
        await expect(
            this.page.getByText(employeeID)
        ).toBeVisible();
    }

}