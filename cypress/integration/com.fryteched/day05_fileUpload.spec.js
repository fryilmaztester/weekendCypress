/// <reference types = "cypress" />

import { url } from "wd/lib/commands";

describe('File Upload', () => {
    
    const URL = "https://davidwalsh.name/demo/multiple-file-upload.php";

    const path01 = "image01.jpeg";
    const path02 = "image02.jpeg";
    const path03 = "image03.jpeg";
    it('Single File Upload', () => {
        cy.visit(URL)

        cy.get("#filesToUpload").attachFile(path01); //Bu metot ile birlikte ilgili resim web sitesine yüklenmiştir. 
         
        cy.get('#fileList').should("include.text","01");

    });

    it.only('Multiple File Upload', () => {

        const imageList = ["image01.jpeg","image02.jpeg","image03.jpeg"];
        cy.visit(URL);
        
        //cy.get("#filesToUpload").attachFile(path01).attachFile(path02).attachFile(path03); // tek tek ekleme
        cy.get("#filesToUpload").attachFile(imageList); //list in içine koyup ekleme

        cy.get("#fileList").should("include.text","image");


    });
});