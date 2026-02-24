import { test } from "@playwright/test";

import { LoginAction } from "../actions/LoginAction";

test(

    'Task1 - Login Page Screenshot',

    async ({ page }) => {
        const loginAction = new LoginAction(page);
        await loginAction.openAndCapture();
    }
)