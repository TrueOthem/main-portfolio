describe('Navigation', () => {
  it('should navigate to all pages', () => {
    // Visit the home page
    cy.visit('/');
    cy.title().should('include', 'Mohamed Adil Al Sabri');

    // Check navigation links
    cy.get('nav').should('be.visible');

    // Navigate to About page
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('My Career Path').should('be.visible');

    // Navigate to Works page
    cy.contains('Works').click();
    cy.url().should('include', '/works');
    cy.contains('My Creative Works').should('be.visible');

    // Navigate to Blog page
    cy.contains('Blog').click();
    cy.url().should('include', '/blog');
    cy.contains('Explore Design').should('be.visible');

    // Navigate to Contact page
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Let\'s Talk About Your').should('be.visible');

    // Back to home page
    cy.contains('Home').click();
    cy.url().should('not.include', '/contact');
  });
});
