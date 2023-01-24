const { test, expect } = require('@playwright/test');

test.describe('getByRole', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./', { waitUntil: 'networkidle' });
    })
    test('Tab - getByRole', async ({ page }) => {
        const tab = page.getByRole('tab');
        const tabCount = await tab.count();
        expect(tabCount).toBeGreaterThanOrEqual(1);
    });
    test('Tablist - getByRole', async ({ page }) => {
        const tablist = page.getByRole('tablist');
        const tablistCount = await tablist.count();
        expect(tablistCount).toBeGreaterThanOrEqual(1);
    });
    test('Tabpanel - getByRole', async ({ page }) => {
        const tabpanel = page.getByRole('tabpanel');
        const tabpanelCount = await tabpanel.count();
        expect(tabpanelCount).toBeGreaterThanOrEqual(1);
    });
    test('Tab - css', async ({ page }) => {
        const tab = page.locator('[aria-role=tab]');
        const tabCount = await tab.count();
        expect(tabCount).toBeGreaterThanOrEqual(1);
    });
    test('Tablist - css', async ({ page }) => {
        const tablist = page.locator('[aria-role=tablist]')
        const tablistCount = await tablist.count();
        expect(tablistCount).toBeGreaterThanOrEqual(1);
    });
    test('Tabpanel - css', async ({ page }) => {
        const tabpanel = page.locator('[aria-role=tabpanel]')
        const tabpanelCount = await tabpanel.count();
        expect(tabpanelCount).toBeGreaterThanOrEqual(1);
    });
});
