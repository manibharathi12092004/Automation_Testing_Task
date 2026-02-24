import { DashboardPage } from "../pages/DashboardPage";
import { AddEmployee } from "../pages/AddEmployee";
import { EmployeeListPage } from "../pages/EmployeeListPage";
import AddEmployeeData from "../testdata/AddEmployee.json";

export class EmployeeAction {
    constructor(page) {
        this.dashboardPage = new DashboardPage(page);
        this.addEmployee = new AddEmployee(page);
        this.employeeListPage = new EmployeeListPage(page);
    }

    async addEmployeeAndValidate() {
        await this.addEmployee.openaddEmployee();
        await this.addEmployee.addEmployee(AddEmployeeData.firstname, AddEmployeeData.lastname);
        const employeeID = await this.addEmployee.captureEmployeeID();
        await this.addEmployee.saveEmployee();
        await this.employeeListPage.openEmployeeList();
        await this.employeeListPage.searchEmployeeByID(employeeID);
        await this.employeeListPage.validateEmployee(employeeID);
    }
}