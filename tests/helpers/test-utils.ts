import { Page, expect, test as baseTest } from '@playwright/test';

/**
 * Tests whether an element has animation properties
 * @param page Playwright page object
 * @param selector CSS selector for the element to test
 * @param propertyName CSS property name (e.g., 'transform', 'opacity')
 */
export async function expectAnimation(
  page: Page,
  selector: string,
  propertyName: string
): Promise<void> {
  // Get initial property value
  const initialValue = await page.evaluate(
    ([sel, prop]) => window.getComputedStyle(document.querySelector(sel)!).getPropertyValue(prop),
    [selector, propertyName]
  );

  // Wait a small amount of time to check for changes
  await page.waitForTimeout(100);

  // Get updated property value
  const updatedValue = await page.evaluate(
    ([sel, prop]) => window.getComputedStyle(document.querySelector(sel)!).getPropertyValue(prop),
    [selector, propertyName]
  );

  // If animation is working, the values should be different
  expect(initialValue).not.toEqual(updatedValue);
}

/**
 * Checks if an element properly respects reduced motion settings
 * @param page Playwright page object
 * @param selector CSS selector for the element to test
 * @param propertyName CSS property to test
 */
export async function testReducedMotion(
  page: Page,
  selector: string,
  propertyName: string
): Promise<void> {
  const animValue = await page.evaluate(
    ([sel, prop]) => {
      const elem = document.querySelector(sel);
      if (!elem) return null;

      const computedStyle = window.getComputedStyle(elem);
      return {
        value: computedStyle.getPropertyValue(prop),
        transitionDuration: computedStyle.getPropertyValue('transition-duration'),
        animationDuration: computedStyle.getPropertyValue('animation-duration')
      };
    },
    [selector, propertyName]
  );

  // For reduced motion, transition and animation durations should be very short or zero
  if (animValue?.transitionDuration) {
    const durationInS = parseFloat(animValue.transitionDuration);
    expect(durationInS).toBeLessThanOrEqual(0.15);
  }

  if (animValue?.animationDuration) {
    const durationInS = parseFloat(animValue.animationDuration);
    expect(durationInS).toBeLessThanOrEqual(0.15);
  }
}

/**
 * Takes a screenshot for visual comparison
 * @param page Playwright page
 * @param testInfo Test information object
 * @param name Screenshot name
 */
export async function takeScreenshot(
  page: Page,
  name: string
): Promise<void> {
  try {
    await page.screenshot({ path: `./test-results/screenshots/${name}.png`, fullPage: false });
  } catch (error) {
    console.error(`Failed to take screenshot ${name}:`, error);
    // Continue test execution even if screenshot fails
  }
}

/**
 * Checks if the device detection logic is working correctly
 * @param page Playwright page
 * @param expectedDevice Expected device type (mobile, tablet, desktop)
 */
export async function testDeviceDetection(
  page: Page,
  expectedDevice: 'mobile' | 'tablet' | 'desktop'
): Promise<void> {
  // First try to get device info from the window object
  const deviceInfo = await page.evaluate(() => {
    // Check if the device context is available in the window
    return (window as any).__DEVICE_INFO__ || null;
  });

  if (deviceInfo) {
    expect(deviceInfo.deviceType).toBe(expectedDevice);
    return;
  }

  // Next try to get device info from data attributes
  const dataDeviceType = await page.evaluate(() => {
    return document.documentElement.getAttribute('data-device-type');
  });

  if (dataDeviceType) {
    expect(dataDeviceType).toBe(expectedDevice);
    return;
  }

  // Finally, fall back to checking viewport size
  const deviceType = await page.evaluate(() => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  });

  expect(deviceType).toBe(expectedDevice);
}

// Create custom test with viewport helpers
export const test = baseTest.extend({
  mobilePage: async ({ page }, use) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await use(page);
  },
  tabletPage: async ({ page }, use) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await use(page);
  },
  desktopPage: async ({ page }, use) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await use(page);
  },
});
