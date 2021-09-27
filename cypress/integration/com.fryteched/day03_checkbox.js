/// <reference types = "cypress" />

describe('checkboxes', () => {
    
    const url  ="http://automationpractice.com/index.php";

    it.skip('checking single box', () => {
        
        cy.visit(url);
        cy.xpath("//a[@title='Women']").click();

        cy.get("#layered_category_4").should("not.be.checked"); //tıklı değil mi demektir. 

        cy.get("#layered_category_4").check().should("be.checked");

        cy.wait(4000); 
        cy.get("#layered_category_4").uncheck().should("not.be.checked");

    });


    it.skip('check all checkboxes', () => {
    
        cy.visit(url);
        cy.xpath("//a[@title='Women']").click();

        cy.xpath("//input[@type='checkbox']").check();


    });

    it('click', () => {
        
        cy.visit(url);
        cy.xpath("//a[@title='Women']").click();

        cy.xpath("//input[@type='checkbox']").click({multiple:true});
    });
});