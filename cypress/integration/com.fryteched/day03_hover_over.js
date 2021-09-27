/// <reference types = "cypress" />


describe('hover over', () => {
    
    it('mouse over', () => {

        cy.visit("https://www.amazon.com/");
        cy.get(".icp-nav-flag.icp-nav-flag-us").trigger("mouseover");

        cy.xpath("//div[@id='nav-flyout-icp']//div[contains(@class,'icp-mkt-change-lnk')]").click({force: true});

        //trigger() --> mouse ile harekt ettirmek için kullanıyoruz. 

        cy.get('#icp-selected-country').select("Canada",{force: true}); // {force: true} --> clicklenmeye seçemeyen yeri seçmeye zorlar. 

        



    })
});