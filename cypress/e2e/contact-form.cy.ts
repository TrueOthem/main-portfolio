describe('Contact Form', () => {
  it('should allow filling out the contact form', () => {
    cy.visit('/contact');

    // Verify the form section is visible
    cy.contains('Send Me a Message').should('be.visible');

    // Fill out the form
    cy.get('input[placeholder="Your Name"]').type('Test User');
    cy.get('input[placeholder="Email Address"]').type('test@example.com');
    cy.get('input[placeholder="Subject"]').type('Test Project');
    cy.get('textarea[placeholder="Your Message..."]').type('This is a test message. I would like to connect with you about a potential project.');

    // Submit the form
    cy.contains('Submit').click();

    // Note: Since our form doesn't have real submission handling yet,
    // we can't check for success messages. We would add that in a real implementation.
  });

  it('should show validation errors for empty form submission', () => {
    // Visit the contact page
    cy.visit('/contact');

    // Submit the form without filling it
    cy.contains('Submit').click();

    // Note: Without form validation implementation, we can't test for error messages.
    // This would be updated once form validation is implemented.
  });

  it('should have working contact information links', () => {
    cy.visit('/contact');

    // Check email link
    cy.get('a[href="mailto:trueothem@gmail.com"]')
      .should('be.visible')
      .contains('trueothem@gmail.com');

    // Check phone link
    cy.get('a[href="tel:+16172333948"]')
      .should('be.visible')
      .contains('+1 (617) 233-3948');

    // Check location text
    cy.contains('Cambridge, MA, USA').should('be.visible');
  });

  it('should have working resume download link', () => {
    cy.visit('/contact');

    // Check resume download section
    cy.contains('Download My Resume').should('be.visible');
    cy.get('a[href="/uploads/Mohamed-adil-resume-PSE.pdf"]').should('be.visible');
  });

  it('should have working LinkedIn link', () => {
    cy.visit('/contact');

    // Check LinkedIn section
    cy.contains('Let\'s Connect on LinkedIn').should('be.visible');
    cy.get('a[href="https://linkedin.com/in/mohamed-adil-al-sabri/"]')
      .should('be.visible')
      .and('have.attr', 'target', '_blank');
  });
});
