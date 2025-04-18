import { test, expect } from '@playwright/test';




test.describe('loginScenario',() => {
    test('validLogin', async ({ page }) => {
        await page.goto('https://test-entity-user.elc.edu.sa/auth');
        await page.getByRole('button', { name: 'الدخول عبر بوابة النفاذ الوطني' }).click();
        await page.locator('id=username').fill('1212121212');
        await page.locator('id=password').fill('1212121212');
        await page.locator('id=kc-login').click();
        await expect(page.getByAltText('FuturX Logo')).toBeVisible();
        console.log('Valid Login Test Case Done Successfully')
        




    });

    test('inValidLogin', async ({ page }) => {
        await page.goto('https://test-entity-user.elc.edu.sa/auth');
        await page.getByRole('button', { name: 'الدخول عبر بوابة النفاذ الوطني' }).click();
        await page.locator('id=username').fill('1212121212');
        await page.locator('id=password').fill('1212121213');
        await page.locator('id=kc-login').click();
        await expect(page.locator('id=input-error-password')).toBeVisible();
        console.log('Invalid Login Test Case Done Successfully')
    });
});