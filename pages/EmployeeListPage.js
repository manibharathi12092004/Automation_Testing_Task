import { expect } from "@playwright/test";
import { EmployeeList, SearchID, SearchButton } from "../pageObjects/EmployeeListPageObjects";
export class EmployeeListPage {
    constructor(page) {
        this.page = page;
        this.employeeList = page.getByRole(EmployeeList.role, { name: EmployeeList.Name });
        this.searchID = page.locator(SearchID);
        this.searchButton = page.getByRole(SearchButton.role, { name: SearchButton.Name });
    }

    async openEmployeeList() {
        await this.employeeList.click();
    }

    async searchEmployeeByID(employeeID) {
        await this.searchID.fill(employeeID, { waitUntil: 'domcontentloaded' });
        await this.searchButton.click();
    }

    async validateEmployee(employeeID) {
        await expect(
            this.page.getByText(employeeID)
        ).toBeVisible();
    }

}