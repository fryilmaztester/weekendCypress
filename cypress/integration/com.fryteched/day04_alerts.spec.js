/// <reference types = "cypress" />

describe('allerts', () => {

    var url= "https://the-internet.herokuapp.com/javascript_alerts";

    it.skip('alert test', () => {
        
        cy.visit(url); 

        cy.get("button[onclick='jsAlert()']").click();

        cy.get("#result").should("have.text","You successfully clicked an alert"); //Burada texti kontrol ettiğimiz için have.text assertionunu kullanıyoruz. 

        

    });


    it.skip('Accept Alert Test', () => {

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


    });

    it('Alert Popup Ok', () => {
        
        cy.visit(url);

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (str) => {
            return true;
        }); //Açılan Pencere  window olduğpu için window:confirm metodunu kullamnıyoruz ve burada açılan alert popup ını okey etmek için kullanıyoruz. 


    });


});