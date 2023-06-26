// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (userName, password) => { 
	cy.visit('https://acetoys.uk/our-story');
	cy.get('#LoginLink').click();
	cy.get('#username').type(userName);
	cy.get('#password').type(password);
	cy.get('.btn').click();
});

Cypress.Commands.add('logout', () => { 
	cy.get('.btn').should('be.visible').contains('Logout')
	cy.xpath('//button[.="Logout"]').click();
});


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
