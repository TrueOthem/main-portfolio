describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('should display the blog page header', () => {
    cy.contains('Engineering & Technical Insights').should('be.visible');
    cy.contains('Articles about engineering challenges').should('be.visible');
  });

  it('should display blog categories', () => {
    // Check that all categories are displayed
    cy.contains('All').should('be.visible');
    cy.contains('Process Development').should('be.visible');
    cy.contains('Data Systems').should('be.visible');
    cy.contains('Engineering').should('be.visible');
    cy.contains('Quality Assurance').should('be.visible');
    cy.contains('Sustainability').should('be.visible');
    cy.contains('Leadership').should('be.visible');
  });

  it('should display blog posts', () => {
    // Check that blog posts are displayed
    cy.contains('Scaling Green Hydrogen Production: Challenges and Solutions').should('be.visible');
    cy.contains('Data-Driven Manufacturing: Transforming Production Efficiency').should('be.visible');
    cy.contains('The Future of Renewable Energy Manufacturing').should('be.visible');
    
    // Check read time indicators
    cy.contains('min read').should('be.visible');
    
    // Check Read More buttons
    cy.contains('Read More').should('be.visible');
  });

  it('should display newsletter section', () => {
    cy.contains('Subscribe to My Newsletter').should('be.visible');
    cy.contains('Receive updates on the latest engineering advancements').should('be.visible');
    
    // Check newsletter form
    cy.get('input[placeholder="Your Email Address"]').should('be.visible');
    cy.contains('Subscribe').should('be.visible');
  });
});
