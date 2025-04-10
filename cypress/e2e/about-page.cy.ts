describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should display the about page header', () => {
    cy.contains('About Me').should('be.visible');
    cy.contains('Mohamed Adil Al Sabri').should('be.visible');
    cy.contains('Process Development Engineer').should('be.visible');
  });

  it('should display professional information', () => {
    // This test assumes there's professional information on the about page
    // Update these assertions based on the actual content of your about page
    cy.contains('Process Development Engineer').should('be.visible');
  });

  it('should have contact buttons', () => {
    // Check for contact buttons on the about page
    cy.contains('Get in Touch').should('be.visible');
    cy.contains('Contact Me').should('be.visible');
  });

  it('should have responsive layout', () => {
    // Test for desktop view
    cy.viewport(1200, 800);
    cy.get('.grid-cols-1.md\\:grid-cols-3').should('be.visible');

    // Test for mobile view
    cy.viewport(375, 667);
    cy.get('.grid-cols-1.md\\:grid-cols-3').should('be.visible');
  });
});
