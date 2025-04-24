import { test } from '@playwright/test';
import { ManageFiles } from '../Pages/MangeFiles';
import jsonData from '../../user&adminData/user.json';

// =================================================Variable==============================================================
let manageFiles: ManageFiles;
const parseJsonData = JSON.parse(JSON.stringify(jsonData));

// =================================================Hooks==============================================================

test.beforeEach('Navigate to URL and Enter Nafaz gate', async ({ page }, testInfo ) => {
    manageFiles = new ManageFiles(page);
    (await manageFiles.getNafazPage()).openNafaz();
    (await manageFiles.getNafazPage()).openInKSA();
});

test.afterEach('This action run after every test case', async ({ page }, testInfo ) => {
    console.log(`test end for : ${testInfo.title}`);
  
});
// =================================================Test Method==============================================================

test.describe('loginScenario', async () => {
     test('validLogin', async ({ page }) => {
        await (await manageFiles.getLoginPage()).validLogin(parseJsonData.username , parseJsonData.password);
    
    });

     test('inValidPassword', async ({ page }) => {
        await (await manageFiles.getLoginPage()).inValidPasswordLogin(parseJsonData.username , '1212121213') ;

    });

     test('inValidUsername', async ({ page }) => {
        await (await manageFiles.getLoginPage()).inValidUserNameLogin('1212121213', parseJsonData.password);

    });
});
