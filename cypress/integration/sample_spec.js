/// <reference types="cypress" />

describe('User should be able ', () => {
  let user;
 
  before('', () => {
    cy.visit('http://localhost:1667/#/');
    cy.task('newUser').then((object) => {
      user = object;
    });
  });

  it('to create a new account', () => {

    cy.get(':nth-child(3) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('.btn').click();

    cy.wait(4000);

    cy.get('.swal-button').click();

    
    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);

    cy.
  });

  
  it('to logout', () => {
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get('.btn-outline-danger').click();
    cy.get(':nth-child(2) > .nav-link').should('contain', 'Sign in');
 
  });

  it('to log in', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(4000);
    cy.get(':nth-child(1) > .form-control').type(user.email);
    cy.get(':nth-child(2) > .form-control').type(user.password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
 });
});