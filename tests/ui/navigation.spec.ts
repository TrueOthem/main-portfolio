import { expect } from '@playwright/test';
import { test, testDeviceDetection } from '../helpers/test-utils';

test.describe('Navigation Tests', () => {
  test('should navigate through all pages on desktop', async ({ page }) => {
    // Visit the home page
    await page.goto('/');
    await expect(page).toHaveTitle(/Mohamed Adil Al Sabri/);

    // Check navigation links are visible
    await expect(page.locator('nav')).toBeVisible();

    // Navigate to About page
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/.*about/);
    await expect(page.getByText('My Career Path')).toBeVisible();

    // Navigate to Works page
    await page.getByRole('link', { name: 'Works' }).click();
    await expect(page).toHaveURL(/.*works/);
    await expect(page.getByText('My Creative Works')).toBeVisible();

    // Navigate to Blog page
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL(/.*blog/);
    await expect(page.getByText('Explore Design')).toBeVisible();

    // Navigate to Contact page
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.getByText(/Let's Talk About Your/)).toBeVisible();

    // Back to home page
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).not.toHaveURL(/.*contact/);
  });

  test('should correctly display mobile navigation menu', async ({ mobilePage: page }) => {
    // Visit the home page
    await page.goto('/');

    // Verify device detection works correctly
    await testDeviceDetection(page, 'mobile');

    // Check hamburger icon is visible
    const hamburgerMenu = page.locator('button[aria-label="Menu"]');
    await expect(hamburgerMenu).toBeVisible();

    // Open mobile menu
    await hamburgerMenu.click();

    // Check all navigation items are visible in the menu
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Works' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();

    // Navigate to a page from the mobile menu
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/.*about/);

    // Check the menu closes after navigation
    await expect(hamburgerMenu).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).not.toBeVisible();
  });

  test('should render correctly on tablet devices', async ({ tabletPage: page }) => {
    // Visit the home page
    await page.goto('/');

    // Verify device detection works correctly
    await testDeviceDetection(page, 'tablet');

    // Check navigation is appropriate for tablet
    const navElement = page.locator('nav');
    await expect(navElement).toBeVisible();

    // Test responsive layout specific to tablets
    const viewport = page.viewportSize();
    expect(viewport?.width).toBeLessThan(1024);
    expect(viewport?.width).toBeGreaterThanOrEqual(768);
  });

  test('should change language using language switcher', async ({ page }) => {
    // Visit the home page
    await page.goto('/');

    // Find language switcher
    const languageSwitcher = page.locator('button', { hasText: /^(EN|AR|ES)$/ });
    await expect(languageSwitcher).toBeVisible();

    // Get initial language
    const initialLanguage = await languageSwitcher.textContent();

    // Open language dropdown
    await languageSwitcher.click();

    // Select a different language (Arabic)
    await page.getByRole('button', { name: 'Arabic' }).click();

    // Check language changed
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(languageSwitcher).not.toHaveText(initialLanguage as string);

    // Change back to English
    await languageSwitcher.click();
    await page.getByRole('button', { name: 'English' }).click();

    // Verify changed back
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});
