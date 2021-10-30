/// <reference types = "cypress" />

import { element } from "wd/lib/commands";

describe('Multiple Window', () => {
    
    var windowsUlr = "https://the-internet.herokuapp.com/windows";

    it.skip('removing target', () => {
        
        cy.visit(windowsUlr);

        cy.get("a[href='/windows/new']").invoke("removeAttr","target").click(); //invoke("removeAttr","target")  target attributundaki değeri remove eder. 

        cy.get('h3').should("include.text","New");
    });


    it('new url', () => {
        
        cy.visit(windowsUlr);
        
        cy
        .get("a[href='/windows/new']")
        .then((element) =>{
            const newURL = element.prop('href')
            cy.visit(newURL);
        })
        //href in değerini prop() ile aldık. 
        //prop() --> jQuery de bir metotdur. Attribute değerini alan bir metotdur. 
        //href değerini yeni bir variable atatyıp ona navigate olduk. 

        cy.get('h3').should("include.text","New");

       
    });
});