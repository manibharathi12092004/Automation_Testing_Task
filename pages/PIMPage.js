import { expect } from "@playwright/test";
import { PIMHeader } from "../pageObjects/PIMPageObjects";
export class PIMPage {
    constructor(page) {
        this.page = page;
        this.pimHeader = page.getByRole(PIMHeader.role, { name: PIMHeader.Name });
    }

    async validatePIMPage() {
        await expect(this.pimHeader).toBeVisible();
    }


}