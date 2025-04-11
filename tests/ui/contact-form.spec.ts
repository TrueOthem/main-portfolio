import { expect } from '@playwright/test';
import { test } from '../helpers/test-utils';

test.describe('Contact Form Tests', () => {
  test('should submit form with valid data', async ({ page }) => {
    // Visit the contact page
    await page.goto('/contact');

    // Fill out the form
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Email Address').fill('test@example.com');
    await page.getByPlaceholder('Project Title').fill('Test Project');
    await page.getByPlaceholder('Project Description...').fill('This is a test message for the contact form. I would like to learn more about your services.');

    // Submit the form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Check for success state (this may vary based on implementation)
    // Could be a success message, redirection, or form clearing
    await page.waitForTimeout(1000); // Wait for potential animations/responses

    // Either the form fields should be cleared or a success message shown
    try {
      // Try to find success message
      const successMessage = await page.getByText(/thank you|success|message received/i).isVisible();
      if (successMessage) {
        expect(successMessage).toBeTruthy();
      } else {
        // If no success message, form should be cleared
        const nameValue = await page.getByPlaceholder('Your Name').inputValue();
        expect(nameValue).toBe('');
      }
    } catch (e) {
      // In case the success check fails, test form clearing
      const emailValue = await page.getByPlaceholder('Email Address').inputValue();
      expect(emailValue).toBe('');
    }
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Visit the contact page
    await page.goto('/contact');

    // Submit form without filling required fields
    await page.getByRole('button', { name: 'Submit' }).click();

    // Check for validation errors
    const errors = page.locator('.error-message, [data-error="true"], [aria-invalid="true"]');

    // There should be validation errors for empty required fields
    await expect(errors).toBeVisible();

    // Check for specific error messages if implemented
    await expect(page.getByText(/required|cannot be empty/i)).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    // Visit the contact page
    await page.goto('/contact');

    // Fill with invalid email
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Email Address').fill('invalid-email');
    await page.getByPlaceholder('Project Title').fill('Test Project');
    await page.getByPlaceholder('Project Description...').fill('This is a test message.');

    // Submit the form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Should show email validation error
    await expect(page.getByText(/invalid email|valid email/i)).toBeVisible();

    // Fix email and try again
    await page.getByPlaceholder('Email Address').fill('valid@example.com');
    await page.getByRole('button', { name: 'Submit' }).click();

    // Email error should be gone
    await expect(page.getByText(/invalid email|valid email/i)).not.toBeVisible();
  });

  test('should be responsive on mobile devices', async ({ mobilePage: page }) => {
    // Visit contact page on mobile
    await page.goto('/contact');

    // Check if form layout adapts to mobile
    const formWidth = await page.locator('form').evaluate(form => form.getBoundingClientRect().width);
    const viewportWidth = await page.evaluate(() => window.innerWidth);

    // Form should be responsive and fit within viewport
    expect(formWidth).toBeLessThanOrEqual(viewportWidth);

    // Input elements should be properly sized for mobile
    const inputHeight = await page.getByPlaceholder('Your Name').evaluate(
      input => parseInt(window.getComputedStyle(input).height)
    );

    // Check for sufficiently sized touch targets (>= 44px is recommended)
    expect(inputHeight).toBeGreaterThanOrEqual(40);

    // Submit button should be full width on mobile
    const buttonWidth = await page.getByRole('button', { name: 'Submit' }).evaluate(
      button => button.getBoundingClientRect().width
    );
    const formContainerWidth = await page.locator('form').evaluate(
      form => form.getBoundingClientRect().width
    );

    // Button should take up most of the form width on mobile
    expect(buttonWidth / formContainerWidth).toBeGreaterThan(0.8);
  });

  test('should handle keyboard navigation and focus states', async ({ page }) => {
    // Visit the contact page
    await page.goto('/contact');

    // Press Tab to navigate form
    await page.keyboard.press('Tab');

    // Check that name input receives focus
    await expect(page.getByPlaceholder('Your Name')).toBeFocused();

    // Continue tab navigation
    await page.keyboard.press('Tab');
    await expect(page.getByPlaceholder('Email Address')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByPlaceholder('Project Title')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByPlaceholder('Project Description...')).toBeFocused();

    // Tab to submit button
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeFocused();

    // Submit with Enter key
    await page.keyboard.press('Enter');

    // Check for validation behavior after keyboard submission
    await expect(page.getByText(/required|cannot be empty/i)).toBeVisible();
  });
});
