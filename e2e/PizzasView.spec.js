import { expect, test } from '@playwright/test'

test.describe('Pizzas View', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/pizzas')
  })

  test('should display the correct title', async ({ page }) => {
    const title = await page.locator('h1')
    expect(await title.textContent()).toBe('Pizzas')
  })

  test('should display the filtered pizza when a search is performed', async ({ page }) => {
    const input = page.locator('[data-testid="search-input"]')
    await input.fill('Hawaiian')
    const button = page.locator('[data-testid="search-button"]')
    await button.click()
    expect(await page.isVisible('[data-testid*="Hawaiian"]')).toBeTruthy()
  })

  test.afterEach(async ({ page }) => {
    // Add any necessary cleanup steps here
    await page.close()
  })
})
