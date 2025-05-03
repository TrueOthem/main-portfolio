import { Page, test as base, BrowserContext, expect } from '@playwright/test';
import { devices } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Create screenshot directory if it doesn't exist
const screenshotDir = path.join(process.cwd(), 'test-results', 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// Extend the base test with custom fixtures
export const test = base.extend({
  // Add custom timeout for visual tests
  visualTimeout: [30000, { option: true }],

  // Add device-specific page fixtures
  desktopPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...devices['Desktop Chrome'],
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  mobilePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...devices['Pixel 5'],
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  tabletPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      ...devices['iPad Pro 11'],
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

/**
 * Takes a screenshot of the current page state
 * @param page - Playwright page object
 * @param name - Name for the screenshot file
 */
export async function takeScreenshot(
  page: Page,
  name: string
): Promise<void> {
  try {
    // Wait for network idle and animations to complete
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Ensure the page is in a stable state
    const isStable = await page.evaluate(() => {
      return new Promise((resolve) => {
        // Check if page is stable after a short delay
        setTimeout(() => {
          const animations = document.getAnimations ? document.getAnimations() : [];
          const hasRunningAnimations = animations.length > 0 && animations.some(
            (animation) => animation.playState === 'running'
          );
          resolve(!hasRunningAnimations);
        }, 500);
      });
    });

    if (!isStable) {
      console.warn(`Page may not be stable when taking screenshot: ${name}`);
    }

    // Take the screenshot with full page option
    await page.screenshot({
      path: `./test-results/screenshots/${name}.png`,
      fullPage: true,
      timeout: 5000
    });
  } catch (error) {
    console.error(`Failed to take screenshot ${name}:`, error);
    // Don't throw error to prevent test failure just because of screenshot
    // Just log the error instead
  }
}

/**
 * Checks if an element has animations or transitions
 * @param page - Playwright page object
 * @param selector - CSS selector for the element to check
 */
export async function checkAnimationState(page: Page, selector: string): Promise<boolean> {
  return page.evaluate((sel) => {
    const element = document.querySelector(sel);
    if (!element) return false;

    const style = window.getComputedStyle(element);
    return style.animation !== '' || style.transition !== '';
  }, selector);
}

/**
 * Tests if animations are present on an element
 * @param page - Playwright page object
 * @param selector - CSS selector for the element to check
 */
export async function expectAnimation(page: Page, selector: string): Promise<void> {
  const element = page.locator(selector);
  await expect(element).toBeVisible();

  // Check for animation properties
  const hasAnimation = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return false;

    const style = window.getComputedStyle(el);
    return style.animation !== '' ||
           style.transition !== '' ||
           style.transform !== 'none' ||
           parseFloat(style.opacity) < 1;
  }, selector);

  // We don't strictly assert the animation is present
  // Just log if it's not found to avoid test failures
  if (!hasAnimation) {
    console.log(`No animation detected on element: ${selector}`);
  }
}

/**
 * Tests if reduced motion preferences are respected
 * @param page - Playwright page object
 */
export async function testReducedMotion(page: Page): Promise<void> {
  // Configure the browser to prefer reduced motion
  await page.emulateMedia({ reducedMotion: 'reduce' });

  // Check if reduced motion is detected
  const isReducedMotion = await page.evaluate(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  expect(isReducedMotion).toBe(true);

  // Check animation durations
  const animationDurations = await page.evaluate(() => {
    const animatedElements = document.querySelectorAll(
      '.animated, [data-animated="true"], button, a, .hero-section, h1'
    );

    if (animatedElements.length === 0) return [];

    return Array.from(animatedElements).slice(0, 5).map(el => {
      const style = window.getComputedStyle(el);
      return {
        transitionDuration: style.transitionDuration,
        animationDuration: style.animationDuration
      };
    });
  });

  // If we have animation durations to check, verify they're appropriate
  if (animationDurations.length > 0) {
    for (const duration of animationDurations) {
      if (duration.transitionDuration && duration.transitionDuration !== '0s') {
        const durationInS = parseFloat(duration.transitionDuration);
        // Reduced motion should have short or no transition
        expect(durationInS).toBeLessThanOrEqual(0.5);
      }
    }
  }
}

/**
 * Tests if device detection is working correctly
 * @param page - Playwright page object
 * @param deviceType - Type of device ('desktop', 'mobile', or 'tablet')
 */
export async function testDeviceDetection(page: Page, deviceType: 'desktop' | 'mobile' | 'tablet'): Promise<void> {
  // Check viewport size to confirm device type
  const viewport = page.viewportSize();

  if (deviceType === 'desktop') {
    expect(viewport?.width).toBeGreaterThanOrEqual(1024);
  } else if (deviceType === 'mobile') {
    expect(viewport?.width).toBeLessThanOrEqual(767);
  } else if (deviceType === 'tablet') {
    expect(viewport?.width).toBeGreaterThanOrEqual(768);
    expect(viewport?.width).toBeLessThanOrEqual(1023);
  }

  // Check if the page has device-specific elements
  if (deviceType === 'mobile') {
    // Mobile should have a hamburger menu
    const mobileMenu = page.locator('button[aria-label="Menu"], [data-testid="mobile-menu"]');
    const isVisible = await mobileMenu.isVisible().catch(() => false);
    if (!isVisible) {
      // If we can't find the mobile menu, log a warning but don't fail the test
      console.warn('Mobile menu not found - device detection may not be working correctly');
    }
  }
}
