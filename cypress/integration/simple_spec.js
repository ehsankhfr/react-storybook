describe('Cypress website', () => {
  it('Does not do much!', () => 
    expect(true).to.equal(true)
  );

  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  });
})
