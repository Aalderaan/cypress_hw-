/// <reference types="cypress" />

describe('Checking "Sign in form"', () => {
  before('go to "Sign in form of conduit website"', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });

  it('Sign in', () => {
    cy.get(':nth-child(1) > .form-control').type('tsdfsdena@mailinator.com');
    cy.get(':nth-child(2) > .form-control').type('Sit_sdfdgfqua*#si_dfficis');
    cy.get('.btn').click();

    cy.get('.navbar').contains('Animus veritatsdis').should('exist'); 
  }); 
});