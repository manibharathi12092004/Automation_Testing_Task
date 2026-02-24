import { expect } from "@playwright/test";

export class AddEmployee {
    constructor(page) {
        this.page = page;
        this.addEmployeeMenu = page.getByRole('link', { name: 'Add Employee' });
        this.firstName = page.locator("input[name='firstName']");
        this.lastName = page.locator("input[name='lastName']");
        this.employeeID = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
        this.saveButton = page.getByRole('button', { name: 'Save' });

    }

    async openaddEmployee() {
        await this.addEmployeeMenu.click();
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
        await this.page.waitForLoadState('domcontentloaded');
    }
}