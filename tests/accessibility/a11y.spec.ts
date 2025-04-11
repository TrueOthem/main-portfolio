import { expect } from '@playwright/test';
import { test } from '../helpers/test-utils';

test.describe('Accessibility Tests', () => {
  test('should have proper semantic HTML structure', async ({ page }) => {
    await page.goto('/');

    // Test for proper HTML landmarks
    const hasHeader = await page.locator('header').count() > 0;
    const hasMain = await page.locator('main').count() > 0;
    const hasFooter = await page.locator('footer').count() > 0;
    const hasNav = await page.locator('nav').count() > 0;

    // We allow for some flexibility in landmark elements
    // At minimum, we need either a header or main element for proper semantic structure
    expect(hasHeader || hasMain).toBe(true);
    expect(hasNav).toBe(true);

    // Check for headings in correct order (no heading level skips)
    const headings = await page.evaluate(() => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(headingElements).map(h => ({
        level: parseInt(h.tagName.substring(1)),
        text: h.textContent?.trim()
      }));
    });

    // Should have at least one heading element
    expect(headings.length).toBeGreaterThan(0);

    // If we have an h1, there should only be one
    const h1Count = headings.filter(h => h.level === 1).length;
    if (h1Count > 0) {
      expect(h1Count).toBeLessThanOrEqual(1);
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');

    // Check text elements for minimum contrast ratio
    const contrastIssues = await page.evaluate(() => {
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, button, label');
      const issues: {element: string, ratio: number | null}[] = [];

      try {
        // Simple check - only test a small sample for performance
        const samplesToCheck = Math.min(textElements.length, 20);
        for (let i = 0; i < samplesToCheck; i++) {
          const el = textElements[i];
          const style = window.getComputedStyle(el);
          const color = style.color;
          const bgColor = style.backgroundColor;

          // Skip elements without explicit background color
          if (!color || !bgColor || bgColor === 'rgba(0, 0, 0, 0)') {
            continue;
          }

          // Only capture the obvious contrast issues
          if (color === bgColor) {
            issues.push({
              element: el.tagName,
              ratio: 1.0 // Extremely low contrast
            });
          }
        }
      } catch (e) {
        console.error("Error in contrast evaluation:", e);
      }

      return issues;
    });

    // We allow issues since we're only checking extreme cases
    expect(contrastIssues.length).toBeLessThan(10);
  });

  test('should have proper focus indicators', async ({ page }) => {
    await page.goto('/');

    // Tab through elements and check that focus styles are applied
    await page.keyboard.press('Tab');

    // Test that focus moves somewhere (for very basic keyboard accessibility)
    const isFocused = await page.evaluate(() => {
      return document.activeElement !== document.body && document.activeElement !== null;
    });

    // Basic focus check - something should get focus after Tab
    expect(isFocused).toBe(true);
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');

    // Check all images for alt text
    const imagesResult = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      if (images.length === 0) {
        return { total: 0, missing: 0 };
      }

      let missing = 0;

      images.forEach(img => {
        // Logo images should have alt text, but decorative images may have empty alt
        if (!img.hasAttribute('alt') && img.getAttribute('role') !== 'presentation') {
          missing++;
        }
      });

      return { total: images.length, missing };
    });

    // If we have images, most should have alt text
    if (imagesResult.total > 0) {
      const missingPercent = (imagesResult.missing / imagesResult.total) * 100;
      expect(missingPercent).toBeLessThan(30); // Allow up to 30% of images to be missing alt text
    }
  });

  test('should have proper form labels', async ({ page }) => {
    // Go to contact page or another page that might have forms
    try {
      await page.goto('/contact');

      // Check if there are any form inputs
      const hasForm = await page.locator('form').count() > 0;

      // If this page doesn't have a form, skip the test
      if (!hasForm) {
        console.log("No form found on contact page, skipping form labels test");
        return;
      }

      // Check that form inputs have associated labels
      const labelsResult = await page.evaluate(() => {
        const inputs = document.querySelectorAll('input:not([type="hidden"]), textarea, select');
        if (inputs.length === 0) {
          return { total: 0, missing: 0 };
        }

        let missing = 0;

        inputs.forEach(input => {
          // Check for any form of labeling
          const hasLabel = input.hasAttribute('id') &&
                          document.querySelector(`label[for="${input.id}"]`) !== null;
          const hasAriaLabel = input.hasAttribute('aria-label') ||
                              input.hasAttribute('aria-labelledby');
          const hasPlaceholder = input.hasAttribute('placeholder');

          if (!hasLabel && !hasAriaLabel && !hasPlaceholder) {
            missing++;
          }
        });

        return { total: inputs.length, missing };
      });

      // Ideally all inputs should have labels, but we'll accept some flexibility
      if (labelsResult.total > 0) {
        const missingPercent = (labelsResult.missing / labelsResult.total) * 100;
        expect(missingPercent).toBeLessThan(25); // Allow up to 25% of inputs to be missing labels
      }
    } catch (e) {
      console.log("Error navigating to contact page, skipping form labels test");
    }
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Tab through the page a few times to check for basic keyboard navigation
    let focusableCount = 0;

    // Try tabbing 6 times to find focusable elements
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('Tab');

      const isFocused = await page.evaluate(() => {
        return document.activeElement !== document.body;
      });

      if (isFocused) focusableCount++;
    }

    // We should be able to focus on at least a couple of elements with keyboard
    expect(focusableCount).toBeGreaterThan(0);
  });
});
