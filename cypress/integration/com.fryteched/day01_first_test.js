
/// <reference types = "cypress" />

//describe içinde testin ismi tanımlanır. 
//'My First Test' --> Test case name
// () => -->>> metot function
// {.....} --> code block



describe('My First Test', () => {

    // it() bloğunda testi tanımlamaya başlıyoruz. 
    // 'Url Test' testin ismi . 
    // Burada describe ı test suite olarak düşünebiliriz. it ('') ise case i miz olarak düşünebiliriz. 

    it('Url Test', () => {
        
        cy.visit("https://www.google.com/"); // visit () komutu ile biz ilgili siteye navigate olunur

        cy.url().should("include","google");// url in içince google içerip içermediğini assert etme çalışmasıdır. 
    });

    it('Title Test', () => {
        
        cy.visit("https://www.google.com/");
        cy.title().should("eq", "Google"); // title() metodu ile ilgili web sitesinin title nı alırız ve devamında 
                                            // "eq" ile eşit mi diyoruz. "Google" eşit ise true dönecektir. 
    });
    
});