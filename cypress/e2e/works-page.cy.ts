describe('Works Page', () => {
  beforeEach(() => {
    cy.visit('/works');
  });

  it('should display the works page header', () => {
    cy.contains('Projects & Accomplishments').should('be.visible');
    cy.contains('A selection of my professional work and projects').should('be.visible');
  });

  it('should display project categories', () => {
    // Check that all categories are displayed
    cy.contains('All').should('be.visible');
    cy.contains('Process Development').should('be.visible');
    cy.contains('Manufacturing').should('be.visible');
    cy.contains('Design Engineering').should('be.visible');
    cy.contains('Data Architecture').should('be.visible');
    cy.contains('R&D Engineering').should('be.visible');
  });

  it('should display project cards', () => {
    // Check that project cards are displayed
    cy.contains('Green Hydrogen Production Process Optimization').should('be.visible');
    cy.contains('Manufacturing Data Architecture System').should('be.visible');
    cy.contains('Production Line Efficiency Enhancement').should('be.visible');
    
    // Check company names
    cy.contains('Electric Hydrogen').should('be.visible');
    cy.contains('Advanced Power Conversion').should('be.visible');
    cy.contains('NIST').should('be.visible');
    
    // Check View Details buttons
    cy.contains('View Details').should('be.visible');
  });

  it('should display resume download section', () => {
    cy.contains('My Resume').should('be.visible');
    cy.contains('Download my full resume').should('be.visible');
    cy.get('a[href="/uploads/Mohamed-adil-resume-PSE.pdf"]').should('be.visible');
  });

  it('should display skills section', () => {
    cy.contains('Technical Expertise').should('be.visible');
    
    // Check skill categories
    cy.contains('Engineering').should('be.visible');
    cy.contains('Data & Programming').should('be.visible');
    cy.contains('Management').should('be.visible');
    
    // Check specific skills
    cy.contains('CAD & SolidWorks').should('be.visible');
    cy.contains('Process Development').should('be.visible');
    cy.contains('SQL & Database Design').should('be.visible');
    cy.contains('Python Development').should('be.visible');
    cy.contains('Project Management').should('be.visible');
    cy.contains('Team Leadership').should('be.visible');
  });
});
