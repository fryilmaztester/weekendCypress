/// <reference types = "cypress" />


/*

1) navigate to  https://qa-environment.koalaresorthotels.com 
2) Login button click
3) Verify user login page
4) Type username and password and click login button

*/
describe('Hotels', () => {
    
    const url = "https://qa-environment.koalaresorthotels.com";
    const loginButton = "//a[normalize-space()='Log in']";
    const userName = "#UserName";
    const passWord = "#Password";
    const buttonLogin = "#btnSubmit";

    it('Test One', () => {
        
        cy.visit(url);  //navigate to  https://qa-environment.koalaresorthotels.com 
        
        cy.xpath(loginButton).click(); //Login button click

        cy.title().should("include", "Log in");//Verify user login page

        //2. yol
        //cy.contains("Log in").click(); //Login button click farklı bir yoludur. 
                                        //Burada text olarak  gözüken metne direkt click eder. 
                                        //contains() metni text olarak görmektedir. 
        
        cy.get(userName).type("manager"); // type() metodu ile ilgili yere yazmak istediğimiz veriyi gönderiyoruz. 
        cy.get(passWord).type("Manager1!");

        cy.get(buttonLogin).click();


    });
   
});