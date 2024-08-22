import { test, expect } from '@playwright/test'

test('/ to have form contain username', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page.locator('form')).toContainText('Username')
})
