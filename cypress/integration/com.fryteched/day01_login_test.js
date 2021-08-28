/// <reference types = "cypress" />


/*

1) https://qa-environment.koalaresorthotels.com sitesine git
2) Login button click
3) Verify user login page
*/
describe('Hotels', () => {
    
    const loginButton = "//a[normalize-space()='Log in']";
    it('Test One', () => {
        
        cy.visit("https://qa-environment.koalaresorthotels.com");
        
        cy.xpath(loginButton).click();

        cy.title().should("include", "Log in");

    });
   
});