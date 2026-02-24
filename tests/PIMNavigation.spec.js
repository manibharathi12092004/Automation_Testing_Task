import { test } from "@playwright/test";
import { LoginAction } from "../actions/LoginAction";
import { PIMAction } from "../actions/PIMAction";

test(
    'Task2 - PIM Navigation and Validate',
    async ({ page }) => {
        const login = new LoginAction(page);
        const pim = new PIMAction(page);
        await login.login();
        await pim.openPIMandValidate();
    }
)