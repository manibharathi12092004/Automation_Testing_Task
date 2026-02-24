import { expect } from "@playwright/test";

export class PIMPage {
    constructor(page) {
        this.page = page;
        this.pimHeader = page.getByRole('heading', { name: 'PIM' });
    }

    async validatePIMPage() {
        await expect(this.pimHeader).toBeVisible();
    }


}