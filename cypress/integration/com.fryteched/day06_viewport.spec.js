/// <reference types = "cypress" />

describe('ViewPort Test ', () => {
    
    it('iphone 6', () => {
        cy.visit("https://www.amazon.com/");

        cy.viewport("macbook-15");
    });

    it('Random Value', () => {
        cy.visit("https://www.amazon.com/");

        cy.viewport(1086, 2016);
    });
});