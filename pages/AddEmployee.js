import { expect } from "@playwright/test";
import { AddEmployeeMenu, FirstName, LastName, EmployeeID, SaveButton } from "../pageObjects/AddEmployeeObjects";
export class AddEmployee {
    constructor(page) {
        this.page = page;
        this.addEmployeeMenu = page.getByRole(AddEmployeeMenu.role, { name: AddEmployeeMenu.Name });
        this.firstName = page.locator(FirstName);
        this.lastName = page.locator(LastName);
        this.employeeID = page.locator(EmployeeID);
        this.saveButton = page.getByRole(SaveButton.role, { name: SaveButton.Name });

    }

    async openaddEmployee() {
        await this.addEmployeeMenu.click({ waitUntil: 'domcontentloaded' });
    }

    async addEmployee(firstName, lastName) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
    }

    async captureEmployeeID() {
        return await this.employeeID.inputValue();
    }

    async saveEmployee() {
        await this.saveButton.click();
        await this.page.waitForTimeout(4000);
    }
}