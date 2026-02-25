import { test } from "@playwright/test";
import { LoginAction } from "../actions/LoginAction";
import { EmployeeAction } from "../actions/EmployeeAction";
import { PIMAction } from "../actions/PIMAction";

test(
    'Task3 - Add Employee and Validate',
    async ({ page }) => {
        const loginAction = new LoginAction(page);
        const employeeAction = new EmployeeAction(page);
        const pimAction = new PIMAction(page);

        await loginAction.openAndCapture();
        await loginAction.login();
        await pimAction.openPIMandValidate();
        await employeeAction.addEmployeeAndValidate();
    }
)

