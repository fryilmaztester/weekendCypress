/// <reference types = "cypress" />

describe('DropDown TestCase', () => {
    
    const url  ="https://the-internet.herokuapp.com/";
    const dropDownLink = "a[href='/dropdown']";
    const dropDown = "//select[@id='dropdown']";

    /*
    1) Get url
    2) Click dropdown link

    */
    it('Dropdown test', () => {
        
        cy.visit(url);

        cy.get(dropDownLink).click();

        //cy.xpath(dropDown).select("Option 1"); // dropdownlar da eğer seçilebilir şekilde 
        //seçenekler varsa bizler direkt olarak select(".....") metodunu kullabiliriz. 

        cy.xpath(dropDown)
                .select("Option 1")
                .should("have.value","1"); // seçililen dropdown da içindeki değerde 1 olup olmadığına bakar. 
        

        console.log(cy.xpath(dropDown).text());


    });
});