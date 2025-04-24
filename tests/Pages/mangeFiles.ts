import { type Page } from "playwright/test";
import { LoginPage } from "./loginPage";
import { NafazPage } from "./NafazPage";

export class ManageFiles {

    // --------------------Locatorss--------// بتعرف كل elemnt موجود في الصفحة ونوعه ايه -------------------
    private readonly Page: Page;
    private readonly loginPage: LoginPage;
    private readonly nafazPage: NafazPage;



    // --------------------Constructor-------------------------
    constructor(page: Page) {
        this.Page = page;
        this.loginPage = new LoginPage(this.Page);
        this.nafazPage = new NafazPage(this.Page);



    }
    // --------------------Methods---------------
    async getLoginPage() {

        return this.loginPage;

    }

    async getNafazPage() {

        return this.nafazPage;

    }





}

