/// <reference types = "cypress" />
import 'cypress-iframe';

/*

Cypress te iframe testi yapabilmek içn izlenecek yollar

    1) npm install ile ------>>>>>>>    "npm install -D cypress-iframe" iframe package yukle
    2) iframe ile cypress in communicate i icin import edilmeli  --->>>>>  "import 'cypress-iframe';"
    3) cy.frameLoaded(Locator) ile iframe in yerini tanımlayarak iframe i yukluyoruz. 
    4) iframe e gitmek için cy.iframe() komutunu kullanıyoruz. 


 */

describe('Iframe Test', () => {
    
    var iframeUrl = "https://the-internet.herokuapp.com/iframe";

    it('Iframe First Test', () => {
        
        cy.visit(iframeUrl);
        
        cy.frameLoaded("#mce_0_ifr"); //Bu locator un da bir tane iframe var ve ben cypress e o iframe i yükle diye komut veriyorum. 
        //ve bu komut ile o iframe e ulaiabilidim. 

        cy.iframe().find('p').clear(); //Text metin p tag inin icinde olduğu için o p tagini bulmasını istiyorum öncelikle

        cy.iframe().find("p").type("FRY TechEducation");

        cy.xpath("(//a[@target = '_blank'])[2]").should("contain.text","Elemental");


    });

    it


});