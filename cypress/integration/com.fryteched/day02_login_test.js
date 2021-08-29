/// <reference types = "cypress" />

describe('LogIn Test', () => {

    const url = "https://test.iyikisordun.com/login.php";
    

    const emailLocator  = "input[name='username']";
    const passWordLocator = "input[name='password']";
    const submitButtonLocator = "input[name='submit']";

    const failMessageLocator = "#fail";

    it('Negative Log in Scenario', () => {
        
        const EMAIL  = "framazanyilmaz@gmail.com";
        const PASSWORD  = "123456789..";
        
        cy.visit(url);

        cy.get(emailLocator).type(EMAIL);

        cy.get(passWordLocator).type(PASSWORD);

        cy.get(submitButtonLocator).click();

        cy.get(failMessageLocator).should("include.text","hatalıdır.");
    });

    it('Positive Log in Scenario', () => {

        const EMAIL  = "cypress_test_1@gmail.com";
        const PASSWORD  = "admin_123";
        
        const dashBoarLocator = ".m-0.text-dark";

        cy.visit(url);

        cy.get(emailLocator).type(EMAIL);

        cy.get(passWordLocator).type(PASSWORD);

        cy.get(submitButtonLocator).click();

        cy.get(dashBoarLocator).should("have.text","Dashboard");

        
    });
    
});