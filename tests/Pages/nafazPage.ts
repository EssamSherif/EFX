import { expect, type Locator, type Page } from "playwright/test";
import { ManageFiles } from '../Pages/MangeFiles';

export class NafazPage {

    // --------------------Locatorss--------// بتعرف كل elemnt موجود في الصفحة ونوعه ايه -------------------
    readonly Page: Page;
    readonly inKSA: Locator;
    readonly outKSA: Locator;
    readonly nafaz_btn: Locator;



    // --------------------Variable----------------------------
    readonly url: string = "https://test-entity-user.elc.edu.sa/auth";

    // --------------------Constructor-------------------------
    constructor(page: Page) {
        this.Page = page;
        this.inKSA = page.getByRole('tab', { name: 'IN_KSA' });
        this.outKSA = page.getByRole('tab', { name: 'OUT_KSA' });
        this.nafaz_btn = page.getByRole('button', { name: 'الدخول عبر بوابة النفاذ الوطني' });



    }
    // --------------------Action & Assersion----------------
    async openNafaz() {
        await this.Page.goto(this.url);
    }

    async openInKSA() {
        // await this.inKSA.click();
        await this.nafaz_btn.click();

    }

    async openOutKSA() {
        await this.outKSA.click();

    }


}

