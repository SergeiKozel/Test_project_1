const services = require('../test/pageobjects/services');
const {links}  = require('../test/links/links');

describe ('Clients page', () => {
//!will be changed after login page readiness
    it('login', () => {
        browser.url(links.services);
        const loginLink = $('//a[contains(text(),\'Refresh\')]');
        loginLink.click()
        browser.pause(1500);
    });

    it('Click sort buttons', () => {
        const nameBtn = $(services.nameBtn);
        nameBt.waitForDisplayed();
        browser.pause(500);
        nameBtn.click();

        const clientBtn = $(services.clientBtn);
        emailBtn.waitForDisplayed();
        browser.pause(500);
        clientBtn.click();

        const creationDateBtn = $(services.creationDateBtn);
        creationDateBtn.waitForDisplayed();
        browser.pause(500);
        creationDateBtn.click();

        const creatorBtn = $(services.creatorBtn);
        creatorBtn.waitForDisplayed();
        browser.pause(500);
        creatorBtn.click();

        const statusBtn = $(services.statusBtn);
        statusBtn.waitForDisplayed();
        browser.pause(500);
        statusBtn.click();

    });

    it('Go to next page', () => {
        const nextPageBtn = $(services.nextPageBtn);
        browser.pause(500);
        nextPageBtn.click();
        browser.pause(500);
        nextPageBtn.click();

    });
})

describe('Create new service', () => {

    it('Click create New', () => {
        const createNewBtn = $(services.createNewBtn);
        createNewBtn.click();
        browser.pause(500);
    });

    //!check uploading
    it('Upload photo', () => {
        const selectBtn = $(services.selectBtn);
        selectBtn.click();
        const path = require('path');
        const filePath = path.join(__dirname, '../../testData/image.jpg');
    });

    it('Fill Name', () => {
        const nameInput = $(services.nameInput);
        nameInput.addValue('Auto Testing services');
        browser.pause(500);
    });

    it('Choose currency', () => {
        const currencyBtn = $(services.currencyBtn);
        currencyBtn.click();

        const currencyEuro = $(services.currencyEuro);
        currencyEuro.click();
        browser.keys('\uE00C')
        browser.pause(500);
    });

    it('Choose category', () => {
        const category = $(services.category);
        category.click();

        const categoryMob = $(services.categoryMob);
        categoryMob.click();
        browser.keys('\uE00C')
        browser.pause(500);
    });

    it('Choose subCategory', () => {
        const subCategory = $(services.subCategory);
        subCategory.click();

        const subCategoryTaxi = $(services.subCategoryTaxi);
        subCategoryTaxi.click();
        browser.keys('\uE00C')
        browser.pause(500);
    });

    it('Add/Del category', () => {
        const addCategory = $(services.addCategory);
        addCategory.click();

        const delCategory = $(services.delCategory);
        delCategory.click();
        // browser.keys('\uE00C')
        // browser.pause(500);
    });

    it('Click Create button', () => {
        const createBtn = $(services.createBtn);
        createBtn.click();
    });

})
