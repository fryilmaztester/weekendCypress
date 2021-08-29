
/// <reference types = "cypress" />



describe('Crystal Key Hotel', () => {
        const url = "https://qa-environment.koalaresorthotels.com";
        const loginButton = "//a[normalize-space()='Log in']";
        const logInPage = "h2[class='mb-4']";

    

        /*
        1) Get navigate to url 
        2) Click login 
        3) verify 

        */
    it('Test Case One', () => {
        cy.visit(url);  //navigate to  https://qa-environment.koalaresorthotels.com 

        cy.xpath(loginButton).click(); //Login button click

        //Assert Islemleri 

        //1) should("include",""); ile assertion
        cy.url().should("include", "Account"); // url in Account içerip içermediğini kontrol ediyor. 

        //2) should("have.text", ""); ile assertion
        cy.xpath(loginButton).should("have.text", "Log in"); // loginButton locator ının text i Log in mi yi kontrol eder. 
        
        //3) should("be.visible") ile assertion
        cy.get(logInPage).should("be.visible"); // Sayfa da ilgili locator u görebiliyor mu?

        //4) should("eq",""); ile asssertion
        cy.title().should("eq","KoalaResortHotels - Log in"); // sayfanın title ı eşit mi? 

        //5) should("include.text","") ile assertion
        cy.get(logInPage).should("include.text","Log in");



    });
});