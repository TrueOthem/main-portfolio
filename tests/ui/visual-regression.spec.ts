import { expect } from '@playwright/test';
import { test, takeScreenshot } from '../helpers/test-utils';

test.describe('Visual Regression Tests', () => {
  // Create a directory for screenshots
  test.beforeAll(async ({ }, testInfo) => {
    const { exec } = require('child_process');
    exec('mkdir -p simplicity-clone/test-results/screenshots');
  });

  test('should render home page correctly on desktop', async ({ desktopPage: page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000); // Wait for animations

    // Take a screenshot for visual comparison
    await takeScreenshot(page, 'home-desktop');

    // Check basic layout elements are visible and positioned correctly
    const header = page.locator('header');
    const hero = page.locator('main > div:first-child, .hero-section');
    const footer = page.locator('footer');

    await expect(header).toBeVisible();
    await expect(hero).toBeVisible();
    await expect(footer).toBeVisible();

    // Verify header is at top
    const headerBox = await header.boundingBox();
    expect(headerBox?.y).toBeLessThan(100);

    // Verify footer is at bottom
    const footerBox = await footer.boundingBox();
    const viewport = page.viewportSize();
    expect(footerBox?.y).toBeGreaterThan((viewport?.height || 600) - 300);
  });

  test('should render home page correctly on mobile', async ({ mobilePage: page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000); // Wait for animations

    // Take a screenshot for visual comparison
    await takeScreenshot(page, 'home-mobile');

    // Check mobile menu is visible
    const mobileMenu = page.locator('button[aria-label="Menu"]');
    await expect(mobileMenu).toBeVisible();

    // Check text is properly sized for mobile
    const fontSize = await page.evaluate(() => {
      const bodyStyle = window.getComputedStyle(document.body);
      return {
        bodySize: bodyStyle.fontSize,
        h1Size: document.querySelector('h1')
          ? window.getComputedStyle(document.querySelector('h1')!).fontSize
          : '0px'
      };
    });

    // Font size should be readable on mobile
    expect(parseInt(fontSize.bodySize)).toBeGreaterThanOrEqual(14);
    expect(parseInt(fontSize.h1Size)).toBeLessThan(60); // Should be smaller than desktop
  });

  test('should render home page correctly on tablet', async ({ tabletPage: page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000); // Wait for animations

    // Take a screenshot for visual comparison
    await takeScreenshot(page, 'home-tablet');

    // Check layout is responsive to tablet size
    const layoutWidths = await page.evaluate(() => {
      return {
        bodyWidth: document.body.clientWidth,
        mainWidth: document.querySelector('main')?.clientWidth || 0,
        containerWidth: document.querySelector('.container')?.clientWidth || 0
      };
    });

    // Content should be properly sized for tablet
    expect(layoutWidths.mainWidth).toBeLessThan(layoutWidths.bodyWidth);

    // Container should be responsive
    const viewportWidth = page.viewportSize()?.width || 768;
    expect(layoutWidths.containerWidth).toBeLessThanOrEqual(viewportWidth - 40); // Account for padding
  });

  test('should render about page correctly', async ({ page }) => {
    await page.goto('/about');
    await page.waitForTimeout(1000); // Wait for animations

    // Take a screenshot for visual comparison
    await takeScreenshot(page, 'about-desktop');

    // Check specific about page elements
    const experienceSection = page.getByText('My Career Path');
    await expect(experienceSection).toBeVisible();

    // Check image aspect ratios on about page
    const imageAspects = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      return Array.from(images).map(img => {
        const ratio = img.height > 0 ? img.width / img.height : 0;
        return {
          ratio,
          isDistorted: ratio < 0.5 || ratio > 3 // Extreme aspect ratios might be a problem
        };
      });
    });

    // Check for distorted images
    const distortedImages = imageAspects.filter(img => img.isDistorted);
    expect(distortedImages.length).toBe(0);
  });

  test('should render works page correctly', async ({ page }) => {
    await page.goto('/works');
    await page.waitForTimeout(1000); // Wait for animations

    // Take a screenshot for visual comparison
    await takeScreenshot(page, 'works-desktop');

    // Check for work items/projects
    const workItems = page.locator('.work-item, [data-testid="work-item"]');
    await expect(workItems.first()).toBeVisible();

    // Check grid layout is balanced
    const gridLayout = await page.evaluate(() => {
      const grid = document.querySelector('.grid, .works-grid');
      if (!grid) return null;

      const style = window.getComputedStyle(grid);
      return {
        display: style.display,
        gridTemplateColumns: style.gridTemplateColumns,
        gap: style.gap
      };
    });

    // Should use CSS Grid or Flexbox for layout
    expect(gridLayout?.display).toMatch(/grid|flex/);

    // If using grid, should have proper column template
    if (gridLayout?.gridTemplateColumns) {
      expect(gridLayout.gridTemplateColumns).not.toBe('none');
    }
  });

  test('should render contact page correctly', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForTimeout(1000); // Wait for animations

    // Take a screenshot for visual comparison
    await takeScreenshot(page, 'contact-desktop');

    // Form should be visible
    const form = page.locator('form');
    await expect(form).toBeVisible();

    // All form fields should be visible
    await expect(page.getByPlaceholder('Your Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
    await expect(page.getByPlaceholder('Project Title')).toBeVisible();
    await expect(page.getByPlaceholder('Project Description...')).toBeVisible();

    // Submit button should be visible and styled correctly
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeVisible();

    const buttonStyles = await submitButton.evaluate(button => {
      const style = window.getComputedStyle(button);
      return {
        backgroundColor: style.backgroundColor,
        color: style.color,
        padding: style.padding,
        borderRadius: style.borderRadius
      };
    });

    // Button should have non-default styling
    expect(buttonStyles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    expect(buttonStyles.borderRadius).not.toBe('0px');
  });

  test('dark mode should render correctly', async ({ page }) => {
    // Enable dark mode if available
    await page.goto('/');

    // Look for theme toggle button
    const themeToggle = page.locator('button[aria-label="Toggle theme"], [data-testid="theme-toggle"]');

    // If theme toggle exists, click it to switch themes
    if (await themeToggle.count() > 0) {
      await themeToggle.click();
      await page.waitForTimeout(500); // Wait for theme transition

      // Take a screenshot in dark mode
      await takeScreenshot(page, 'home-dark-mode');

      // Check dark mode is applied
      const isDarkMode = await page.evaluate(() => {
        return document.documentElement.classList.contains('dark') ||
               document.body.classList.contains('dark-theme') ||
               window.matchMedia('(prefers-color-scheme: dark)').matches;
      });

      expect(isDarkMode).toBe(true);

      // Background should be dark
      const bgColor = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });

      // Check if background color is dark
      // If it's hex, can check directly, if it's rgb/rgba need to parse
      function isDarkColor(color: string) {
        // For hex colors
        if (color.startsWith('#')) {
          const hex = color.replace('#', '');
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 128;
        }

        // For rgb/rgba
        const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 128;
        }

        return false;
      }

      expect(isDarkColor(bgColor)).toBe(true);
    }
  });
});
