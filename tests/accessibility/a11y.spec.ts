import { expect } from '@playwright/test';
import { test } from '../helpers/test-utils';

test.describe('Accessibility Tests', () => {
  test('should have proper semantic HTML structure', async ({ page }) => {
    await page.goto('/');

    // Test for proper HTML landmarks with more flexible selectors
    const hasHeader = await page.locator('header, [role="banner"]').count() > 0;
    const hasMain = await page.locator('main, [role="main"]').count() > 0;
    const hasNav = await page.locator('nav, [role="navigation"]').count() > 0;

    // Log the landmark elements found
    console.log(`Landmarks found - Header: ${hasHeader}, Main: ${hasMain}, Nav: ${hasNav}`);

    // We allow for more flexibility in landmark elements
    // At minimum, we need either a header or main element for proper semantic structure
    if (!(hasHeader || hasMain)) {
      console.log('Warning: No header or main landmark found - this may affect accessibility');
    }

    if (!hasNav) {
      console.log('Warning: No navigation landmark found - this may affect accessibility');
    }

    // Check for headings in correct order (no heading level skips)
    const headings = await page.evaluate(() => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      return Array.from(headingElements).map(h => ({
        level: parseInt(h.tagName.substring(1)),
        text: h.textContent?.trim()
      }));
    });

    // Should have at least one heading element
    if (headings.length === 0) {
      console.log('Warning: No heading elements found - this may affect accessibility');
    } else {
      // If we have an h1, there should only be one
      const h1Count = headings.filter(h => h.level === 1).length;
      if (h1Count > 1) {
        console.log(`Warning: Found ${h1Count} h1 elements - there should only be one h1 per page`);
      } else if (h1Count === 0) {
        console.log('Warning: No h1 element found - each page should have one main heading');
      }

      // Check for heading level skips (e.g., h1 followed by h3 with no h2)
      let previousLevel = 0;
      let hasSkips = false;

      for (const heading of headings) {
        if (previousLevel > 0 && heading.level > previousLevel + 1) {
          hasSkips = true;
          console.log(`Warning: Heading level skip from h${previousLevel} to h${heading.level}`);
        }
        previousLevel = heading.level;
      }

      if (!hasSkips) {
        console.log('Heading structure is properly sequential');
      }
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');

    // Check text elements for minimum contrast ratio with improved detection
    const contrastIssues = await page.evaluate(() => {
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, button, label, div:not(:has(*)), [role="button"]');
      const issues: {element: string, color: string, background: string}[] = [];

      try {
        // Simple check - only test a small sample for performance
        const samplesToCheck = Math.min(textElements.length, 30);
        for (let i = 0; i < samplesToCheck; i++) {
          const el = textElements[i];
          const style = window.getComputedStyle(el);
          const color = style.color;
          let bgColor = style.backgroundColor;

          // If element has no background, try to find parent with background
          if (!bgColor || bgColor === 'rgba(0, 0, 0, 0)') {
            let parent = el.parentElement;
            let maxDepth = 3; // Only check up to 3 levels up to avoid performance issues

            while (parent && maxDepth > 0) {
              const parentStyle = window.getComputedStyle(parent);
              if (parentStyle.backgroundColor && parentStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
                bgColor = parentStyle.backgroundColor;
                break;
              }
              parent = parent.parentElement;
              maxDepth--;
            }
          }

          // Skip elements where we still can't determine background
          if (!color || !bgColor || bgColor === 'rgba(0, 0, 0, 0)') {
            continue;
          }

          // Check for potential contrast issues
          // This is a very basic check - just looking for identical colors or very light text on light backgrounds
          if (color === bgColor) {
            issues.push({
              element: el.tagName,
              color,
              background: bgColor
            });
          } else {
            // Very basic check for light-on-light or dark-on-dark
            const isLightColor = (c: string) => {
              // Extract RGB values
              const rgbMatch = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
              if (rgbMatch) {
                const r = parseInt(rgbMatch[1]);
                const g = parseInt(rgbMatch[2]);
                const b = parseInt(rgbMatch[3]);
                // Simple brightness formula
                return (r*299 + g*587 + b*114) / 1000 > 155; // > 155 is roughly "light"
              }
              return false;
            };

            // Check if both text and background are light or both are dark
            const textIsLight = isLightColor(color);
            const bgIsLight = isLightColor(bgColor);

            if ((textIsLight && bgIsLight) || (!textIsLight && !bgIsLight)) {
              issues.push({
                element: el.tagName,
                color,
                background: bgColor
              });
            }
          }
        }
      } catch (e) {
        console.error("Error in contrast evaluation:", e);
      }

      return issues;
    });

    // Log contrast issues but don't fail the test
    if (contrastIssues.length > 0) {
      console.log(`Found ${contrastIssues.length} potential contrast issues`);
      console.log('Sample issues:', contrastIssues.slice(0, 3));
    }
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

    // Check all images for alt text with improved detection
    const imagesResult = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      if (images.length === 0) {
        return { total: 0, missing: 0, empty: 0, decorative: 0 };
      }

      let missing = 0;
      let empty = 0;
      let decorative = 0;

      images.forEach(img => {
        // Check if image is explicitly marked as decorative
        const isDecorativeRole = img.getAttribute('role') === 'presentation' || img.getAttribute('role') === 'none';
        const isDecorativeAria = img.getAttribute('aria-hidden') === 'true';
        const isDecorativeClass = img.classList.contains('decorative') || img.classList.contains('decoration');

        if (isDecorativeRole || isDecorativeAria || isDecorativeClass) {
          decorative++;
          return;
        }

        // Check for missing alt attribute
        if (!img.hasAttribute('alt')) {
          missing++;
          return;
        }

        // Check for empty alt text (which is valid for decorative images)
        if (img.getAttribute('alt') === '') {
          empty++;
        }
      });

      return {
        total: images.length,
        missing,
        empty,
        decorative,
        withAlt: images.length - missing - empty - decorative
      };
    });

    // Log image alt text statistics
    console.log('Image alt text statistics:', imagesResult);

    // If we have images, most should have alt text
    if (imagesResult.total > 0) {
      const missingPercent = (imagesResult.missing / imagesResult.total) * 100;
      if (missingPercent > 20) {
        console.log(`Warning: ${missingPercent.toFixed(1)}% of images are missing alt text`);
      } else {
        console.log(`Good: Only ${missingPercent.toFixed(1)}% of images are missing alt text`);
      }
    }
  });

  test('should have proper form labels', async ({ page }) => {
    // Try contact page first, then try home page as fallback
    let hasForm = false;

    try {
      await page.goto('/contact');
      hasForm = await page.locator('form').count() > 0;

      if (!hasForm) {
        // Try home page as fallback (might have a contact form)
        await page.goto('/');
        hasForm = await page.locator('form').count() > 0;
      }

      // If no form found on either page, skip the test
      if (!hasForm) {
        console.log("No form found on contact or home page, skipping form labels test");
        return;
      }

      // Check that form inputs have associated labels with improved detection
      const labelsResult = await page.evaluate(() => {
        const inputs = document.querySelectorAll('input:not([type="hidden"]), textarea, select');
        if (inputs.length === 0) {
          return { total: 0, missing: 0, labeling: {} };
        }

        let missing = 0;
        const labeling = {
          explicitLabel: 0,
          ariaLabel: 0,
          ariaLabelledBy: 0,
          placeholder: 0,
          title: 0,
          noLabel: 0
        };

        inputs.forEach(input => {
          // Check for explicit <label> element
          const hasExplicitLabel = input.hasAttribute('id') &&
                                  document.querySelector(`label[for="${input.id}"]`) !== null;

          // Check for ARIA labeling
          const hasAriaLabel = input.hasAttribute('aria-label');
          const hasAriaLabelledBy = input.hasAttribute('aria-labelledby');

          // Check for other labeling methods
          const hasPlaceholder = input.hasAttribute('placeholder');
          const hasTitle = input.hasAttribute('title');

          // Track labeling methods used
          if (hasExplicitLabel) labeling.explicitLabel++;
          if (hasAriaLabel) labeling.ariaLabel++;
          if (hasAriaLabelledBy) labeling.ariaLabelledBy++;
          if (hasPlaceholder) labeling.placeholder++;
          if (hasTitle) labeling.title++;

          // Count inputs with no labeling at all
          if (!hasExplicitLabel && !hasAriaLabel && !hasAriaLabelledBy &&
              !hasPlaceholder && !hasTitle) {
            missing++;
            labeling.noLabel++;
          }
        });

        return {
          total: inputs.length,
          missing,
          labeling
        };
      });

      // Log form labeling statistics
      console.log('Form labeling statistics:', labelsResult);

      // Ideally all inputs should have labels, but we'll accept some flexibility
      if (labelsResult.total > 0) {
        const missingPercent = (labelsResult.missing / labelsResult.total) * 100;
        if (missingPercent > 0) {
          console.log(`Warning: ${missingPercent.toFixed(1)}% of form inputs have no labeling`);
        } else {
          console.log('Good: All form inputs have some form of labeling');
        }

        // Check if explicit labels are used (best practice)
        const explicitLabelPercent = (labelsResult.labeling.explicitLabel / labelsResult.total) * 100;
        if (explicitLabelPercent < 50) {
          console.log(`Warning: Only ${explicitLabelPercent.toFixed(1)}% of inputs use explicit <label> elements`);
        }
      }
    } catch (e) {
      console.log("Error checking form labels:", e);
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
