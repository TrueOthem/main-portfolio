# End-to-End Testing for Mohamed Al Sabri's Portfolio

This comprehensive testing suite is designed to verify every aspect of the portfolio website, with a special focus on UI/UX, animations, and responsive design across all device sizes.

## Test Structure

The tests are organized into logical categories:

### 1. UI Tests (`/tests/ui`)
- `navigation.spec.ts`: Verifies all navigation links and menu functionality
- `contact-form.spec.ts`: Tests form validation and submission
- `visual-regression.spec.ts`: Ensures visual consistency across the site

### 2. Animation Tests (`/tests/animations`)
- `animations.spec.ts`: Tests all Framer Motion animations, transitions, and interactive elements

### 3. Responsive Design Tests (`/tests/responsive`)
- `device-detection.spec.ts`: Verifies the device detection system and responsive adaptations

### 4. Accessibility Tests (`/tests/accessibility`)
- `a11y.spec.ts`: Tests WCAG compliance, keyboard navigation, screen reader support, and reduced motion

### 5. Helper Utilities (`/tests/helpers`)
- `test-utils.ts`: Contains shared utilities for animation testing, device simulation, and more

## Testing Features

This suite automatically tests:

- **UI & Styling**: Verifies all elements are properly styled and positioned
- **Animations**: Tests that animations work correctly and adapt to device capabilities
- **Responsiveness**: Ensures the layout adapts correctly to mobile, tablet, and desktop screens
- **Device Detection**: Verifies the site correctly identifies and adapts to different devices
- **Accessibility**: Ensures the site is accessible to all users, including those with motion sensitivity
- **Transitions**: Tests page transitions and navigation flow
- **Forms**: Validates form functionality and error handling
- **Visual Consistency**: Captures screenshots for visual comparison

## Device Coverage

Tests automatically run against:

- **Desktop**: Chrome, Firefox, and Safari
- **Mobile**: iPhone and Android devices
- **Tablet**: iPad and other tablet sizes
- **Accessibility**: Reduced motion preference

## Running Tests

All tests can be run with the following commands:

```bash
# Install dependencies
cd simplicity-clone
bun install

# Run all tests headlessly
bun run test

# Run with UI mode for debugging
bun run test:ui

# Run tests in headed browsers
bun run test:headed

# View test report
bun run test:report

# Run against a specific category
bun run test -- tests/animations/
```

## Adding New Tests

To add new tests:

1. Create a new file in the appropriate category
2. Import utilities from `../helpers/test-utils`
3. Add your test cases using the Playwright `test` function
4. Run the tests to verify

## Visual Testing

Screenshots are automatically captured during visual tests and saved to:

```
simplicity-clone/test-results/screenshots/
```

You can use these for visual comparison between versions.
