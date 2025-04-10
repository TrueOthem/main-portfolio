// ***********************************************
// Custom commands for testing the portfolio website
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to check if element is visible and contains text
     */
    containsAndVisible(text: string): Chainable<Element>;

    /**
     * Custom command to check if form field has error
     */
    hasFieldError(fieldName: string): Chainable<Element>;

    /**
     * Custom command to check if a section with a heading exists
     */
    sectionExists(headingText: string): Chainable<Element>;

    /**
     * Custom command to fill out the contact form
     */
    fillContactForm(name: string, email: string, subject: string, message: string): void;

    /**
     * Custom command to check theme toggle functionality
     */
    checkThemeToggle(): void;
  }
}

Cypress.Commands.add('containsAndVisible', (text: string) => {
  cy.contains(text).should('be.visible');
});

Cypress.Commands.add('hasFieldError', (fieldName: string) => {
  cy.get(`[data-cy="error-${fieldName}"]`).should('be.visible');
});

Cypress.Commands.add('sectionExists', (headingText: string) => {
  cy.contains(headingText).should('be.visible');
});

Cypress.Commands.add('fillContactForm', (name: string, email: string, subject: string, message: string) => {
  cy.get('input[placeholder="Your Name"]').type(name);
  cy.get('input[placeholder="Email Address"]').type(email);
  cy.get('input[placeholder="Subject"]').type(subject);
  cy.get('textarea[placeholder="Your Message..."]').type(message);
});

Cypress.Commands.add('checkThemeToggle', () => {
  // Get the theme toggle button
  cy.get('button[aria-label="Toggle theme"]').as('themeToggle');

  // Check that it exists
  cy.get('@themeToggle').should('exist');

  // Click it to toggle theme
  cy.get('@themeToggle').click();

  // We could add more assertions here if we had a way to check the current theme
});
