/// <reference types = "cypress" />

describe('Command Usage Method with Amazon', () => {
    
    it('Amazon Product Search', () => {
        cy.searchAmazon("imac");

        cy.url().should("include","imac");
    });
});