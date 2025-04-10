describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the hero section', () => {
    cy.contains('Mohamed Adil').should('be.visible');
    cy.contains('Al Sabri').should('be.visible');
  });

  it('should have working navigation', () => {
    // Check that navigation is visible
    cy.get('nav').should('be.visible');
    
    // Check navigation links
    cy.contains('Home').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Works').should('be.visible');
    cy.contains('Blog').should('be.visible');
    cy.contains('Contact').should('be.visible');
  });

  it('should have working footer', () => {
    // Check that footer is visible
    cy.get('footer').should('be.visible');
    
    // Check footer links
    cy.get('footer').contains('LinkedIn').should('be.visible');
    cy.get('footer').contains('Email').should('be.visible');
    cy.get('footer').contains('Phone').should('be.visible');
    
    // Check copyright
    cy.get('footer').contains(`© ${new Date().getFullYear()} Mohamed Adil Al Sabri`).should('be.visible');
  });

  it('should have theme toggle', () => {
    // Check that theme toggle is visible
    cy.get('button[aria-label="Toggle theme"]').should('be.visible');
  });
});
