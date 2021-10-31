/// <reference types = "cypress" />

describe('Command Usage Method', () => {
    
    it('Login Method', () => {
        
        cy.login("123murat123@gmail.com","123murat123");
    });

    it('Negative Login Test', () => {
        cy.login("123123@gmail.com","qweqwe");
        cy.contains("Authentication failed.").should("be.visible");
        cy.screenshot(); //ss alma komutu 
    });


});