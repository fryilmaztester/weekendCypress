/// <reference types = "cypress" />


/*

1) Cypresste popup alertleri gözükmez. 

2) Cypress alert popuplarında otomatik olarak Ok, Tamam ı kabul eder. 

3) İptal etmesini istiyorsak jQuery den gelen on() metodunu kullanıyourzç ve return olarak false gönderiyoruz. 

4) Eğer alert e herhangi bir şey gödermek istediğimiz bir şey varsa
          cy.window() //popup pencereleri kontrol eder. 
             .then(($windowElement)=>{
             cy.stub($windowElement,"prompt").returns("Hi"); //Acılan penceredeki alan yazdırmak istedigimiz bilgiyi gönderiyoruz. 

            metodunu kullanıyoruz. 



*/
describe('allerts', () => {

    var url= "https://the-internet.herokuapp.com/javascript_alerts";

    

    it('alert test', () => {
        
        cy.visit(url); 

        cy.get("button[onclick='jsAlert()']").click();

        cy.get("#result").should("have.text","You successfully clicked an alert"); //Burada texti kontrol ettiğimiz için have.text assertionunu kullanıyoruz. 

        

    });


    //2.Buton Tıklanır
    it('Accept Alert Test', () => {

        cy.visit(url); 

        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.get("#result").should("include.text","Ok");
    });

    it('Dismiss Alert', () => {
        
        cy.visit(url);

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (str) => {
            return false;
        }); //Açılan Pencere  window olduğpu için window:confirm metodunu kullamnıyoruz ve burada açılan alert popup ını iptal etmek için kullanıyoruz. 

        cy.get("#result").should("include.text","Cancel");

    });

    it('Alert Popup Ok', () => {
        
        cy.visit(url);

        cy.get("button[onclick='jsConfirm()']").click();

        /*
        cy.on("window:confirm", (str) => {
            return true;
        }); //Açılan Pencere  window olduğpu için window:confirm metodunu kullamnıyoruz ve burada açılan alert popup ını okey etmek için kullanıyoruz. 

*/ 
        cy.on("window:confirm", (str) => {
            return false;
          //  ----Açılan Pencere  window olduğpu için window:confirm metodunu kullanıyoruz ve burada açılan alert popup ını iptal etmek için kullanıyoruz.----
        });
        

        
    });

    it.only('Alert Popup a Bilgi Girisi', () => {
        
        cy.visit(url);

        cy.get("button[onclick='jsPrompt()']");

        cy.window() //popup pencereleri kontrol eder. 
        .then(($windowElement)=>{
            cy.stub($windowElement,"prompt").returns("Hi"); //Acılan penceredeki alan yazdırmak istedigimiz bilgiyi gönderiyoruz. 

            cy.get("button[onclick='jsPrompt()']").click(); 
        })

        cy.get("#result").should("include.text","Hi");
    });

});