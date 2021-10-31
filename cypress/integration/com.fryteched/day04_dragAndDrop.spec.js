/*

Drag and Drop işlemleri 
    1) npm install --save-dev @4tw/cypress-drag-drop komuutnu terminalde çalıştırarak plugini yüklüyoruz. 
    2) Command Js in içine de koyaibliriz. yada import etmemiz gerekecektir. 

*/

/// <reference types = "cypress" />

import '@4tw/cypress-drag-drop'


describe('Drag and Drop', () => {

    var URL= "https://www.testandquiz.com/selenium/testing.html";

    it('Double Click', () => {
        
        cy.visit(URL);

        
        cy.get("#dblClkBtn").dblclick(); //Çift Tıklama için 

       // cy.get("#dblClkBtn").rightclick(); //Sağ tıklama için 

       cy.on("window:alert",(str)=>{
           //Assert işslemi 

           //1)
           //expect(str).to.equal("hi, JavaTpoint Testing");
           
           //2)
           //expect(str).to.eq("hi, JavaTpoint Testing");

           //3
           expect(str).to.contain("Java");
       })
    });

    it.only('Drag and Drop', () => {
        
        cy.visit(URL);

        //cy.get("#sourceImage") //Drag nesnemizin locator u
        //cy.get("#targetDiv") //Drop edeceğimiz yerin locator ı

        cy.get("#sourceImage").
           drag("#targetDiv");

    });
});

