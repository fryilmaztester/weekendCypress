/*

Drag and Drop işlemleri 
    1) npm install --save-dev @4tw/cypress-drag-drop komuutnu terminalde çalıştırarak plugini yüklüyoruz. 
    2) Command Js in içine de koyaibliriz. yada import etmemiz gerekecektir. 

*/

import '@4tw/cypress-drag-drop'

describe('Drag and Drop', () => {

    var URL= "https://www.testandquiz.com/selenium/testing.html";

    it('Double Click', () => {
        
        cy.visit(URL);

        cy.get("#dblClkBtn").dblclick(); //Çift Tıklama için 

        cy.get("#dblClkBtn").rightclick(); //Sağ tıklama için 
    });
});

