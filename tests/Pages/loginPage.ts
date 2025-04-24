import { expect, type Locator, type Page } from "playwright/test";
import { ManageFiles } from '../Pages/MangeFiles';


export class LoginPage {

    // --------------------Locatorss--------// بتعرف كل elemnt موجود في الصفحة ونوعه ايه -------------------
    readonly Page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login_btn: Locator;
    readonly logo: Locator;
    readonly invalidPWMessage: Locator;
    readonly invalidUNMessage: Locator;



    // --------------------Variable----------------------------

    // --------------------Constructor-------------------------
    constructor(page: Page) {
        this.Page = page;
        this.username = page.locator('id=username');
        this.password = page.locator('id=password');
        this.login_btn = page.locator('id=kc-login');
        this.logo = page.locator('css=.grid-cols-1');
        this.invalidPWMessage = page.locator('id=input-error-password');
        this.invalidUNMessage = page.locator('id=input-error-username');



    }
    // --------------------Action & Assersion----------------
    async validLogin(username, password) {
        await this.Page.waitForTimeout(2000);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_btn.click();
        await expect(this.logo).toBeVisible();
        await this.Page.close();

    }

    async inValidPasswordLogin(username, password) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_btn.click();
        await expect(this.invalidPWMessage).toBeVisible();
        await this.Page.close();
    }

    async inValidUserNameLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_btn.click();
        await expect(this.invalidUNMessage).toBeVisible();
        await this.Page.close();
    }




}

