/// <reference types = "cypress" />

describe('scroll', () => {
    
    const url = "https://qa-environment.koalaresorthotels.com";
    const ourRoomLocate = "//h2[normalize-space()='Our Rooms']";


    it('scroll into view', () => {

        cy.visit(url);

        cy.xpath(ourRoomLocate).scrollIntoView(); 

        //scrollIntoView();  verilen locater a kadar scroll işlemi yapar.

        //scrollTo() --> 

        cy.scrollTo("bottom");
    })
});