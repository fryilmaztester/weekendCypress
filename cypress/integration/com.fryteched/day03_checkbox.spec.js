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

        //normalde click() tek elemana tıklamak için uygulanır. Birden fazla elemana uygulamak için 
        //{multiple:true} kullanılır. click({multiple:true});  

        //Assertion Operation

        //1)
        cy.get("input[type='checkbox']").first().should("be.checked");


        //2)
        cy.get("input[type='checkbox']").first().parent().should("have.class","checked"); //ilgili locatorun ın parentındaki class attribute u cehecked mı? diye asseriton işlemi yapıyor.
        

        //3)
        //should("have.id","checked");
        //should("have.type","checked"); şeklinde asseriton işlemleri yapabiliriz  
        });
});