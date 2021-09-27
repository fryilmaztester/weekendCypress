/// <reference types = "cypress" />

describe('Navigation', () => {
    
    const url = "https://qa-environment.koalaresorthotels.com";
    const loginButton = "//a[normalize-space()='Log in']";
    const logInPage = "h2[class='mb-4']";

    /*
    
    1) Get navigate url
    2) Click login
    3) Back to return page
    4) forward page
    5) refresh page

    */
    it.skip('Page Commands', () => { // .skip komutu ilgili testi ignore eder ve çalıştırmaz 
        
        cy.visit(url);

        cy.xpath(loginButton).click(); //Login button click 

        cy.go("back"); // Sayfanın geri ye gelmesi için kullanıyoruz. 
        //cy.go(-1); Sayfanın geri ye gelmesi için kullandığımız diğer bir komut

        cy.go("forward"); //Sayfanın ileriye gitmesi için kullanıyoruz. 
        //cy.go(1); Sayfanın ileriye gitmesi için kullandığımız diğer bir komut

        cy.reload(); //Sayfayı tekrar yüklemek için kullanıyoruz.  refresh işlemini yapar 

    

    });

    it('Chaining Navigation', () => {
        
        cy.visit(url);

        cy.xpath(loginButton)
            .click()//Login button click 
            .go(-1)// Back to return page
            .go(1); // Forward to page


    });
});