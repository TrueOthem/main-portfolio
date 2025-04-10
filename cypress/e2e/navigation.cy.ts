describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to all pages', () => {
    // Visit the home page
    cy.visit('/');
    cy.title().should('include', 'Mohamed Adil Al Sabri');

    // Check navigation links
    cy.get('nav').should('be.visible');

    // Navigate to About page
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Me').should('be.visible');

    // Navigate to Works page
    cy.contains('Works').click();
    cy.url().should('include', '/works');
    cy.contains('Projects & Accomplishments').should('be.visible');

    // Navigate to Blog page
    cy.contains('Blog').click();
    cy.url().should('include', '/blog');
    cy.contains('Engineering & Technical Insights').should('be.visible');

    // Navigate to Contact page
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Let\'s Connect').should('be.visible');

    // Back to home page
    cy.contains('Home').click();
    cy.url().should('not.include', '/contact');
  });

  it('should navigate using footer links', () => {
    // Check footer navigation
    cy.get('footer').should('be.visible');

    // Navigate to About page from footer
    cy.get('footer').contains('About').click();
    cy.url().should('include', '/about');

    // Navigate to Works page from footer
    cy.get('footer').contains('Works').click();
    cy.url().should('include', '/works');

    // Navigate to Blog page from footer
    cy.get('footer').contains('Blog').click();
    cy.url().should('include', '/blog');

    // Navigate to Home page from footer
    cy.get('footer').contains('Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
