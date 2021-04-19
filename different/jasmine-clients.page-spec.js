const clients = require('../test/pageobjects/clients');
const {links}  = require('../test/links/links');

describe ('Clients page', () => {
//!will be changed after login page readiness
    it('login', () => {
        browser.url(links.clients);
        const loginLink = $('//a[contains(text(),\'Refresh\')]');
        loginLink.click()
        browser.pause(1500);
    });

    it('Click sort buttons', () => {
        const nameBt = $(clients.nameBt);
        nameBt.waitForDisplayed();
        browser.pause(500);
        nameBt.click();

        const emailBtn = $(clients.emailBtn);
        emailBtn.waitForDisplayed();
        browser.pause(500);
        emailBtn.click();

        const phoneBtn = $(clients.phoneBtn);
        phoneBtn.waitForDisplayed();
        browser.pause(500);
        phoneBtn.click();

        const servicesBtn = $(clients.servicesBtn);
        servicesBtn.waitForDisplayed();
        browser.pause(500);
        servicesBtn.click();

        const statusBtn = $(clients.statusBtn);
        statusBtn.waitForDisplayed();
        browser.pause(500);
        statusBtn.click();

    });
})

describe('Create new client', () => {

    it('Click create New', () => {
        const createNewBtn = $(clients.createNewBtn);
        createNewBtn.click();
        browser.pause(500);
    });

//!check uploading
    it('Upload photo', () => {
        const selectBtn = $(clients.selectBtn);
        selectBtn.click();
        const path = require('path');
        const filePath = path.join(__dirname, '../../testData/client.jpg');
        // .waitForDisplayed();
    });

    it('Choose buildings', () => {
        const buildingBtn = $(clients.buildingsBtn);
        buildingBtn.click();
        browser.pause(100);

        const holidayBox = $(clients.holidayBox);
        holidayBox.click();
        browser.pause(100);

        const loonaBox = $(clients.loonaBox);
        loonaBox.click();
        browser.pause(100);

        const technoBtn = $(clients.technoBtn);
        technoBtn.click();
        browser.pause(100);

      //should close dropdown
        browser.keys('\uE00C')
        browser.pause(100);


    });

    it('Choose type of client', () => {
        const typeOfClientsBtn = $(clients.typeOfClientsBtn);
        typeOfClientsBtn.click();

        const typeResidential = $(clients.typeResidential);
        typeResidential.click();

        browser.keys('\uE00C')
        browser.pause(500);

    });

    it('Fill needed fields', () => {
        const nameInput = $(clients.nameInput);
        nameInput.addValue('Sergey QA');
        browser.pause(500);

        const emailInput = $(clients.emailInput);
        emailInput.addValue('automation@test.com');
        browser.pause(500);

        const phoneInput = $(clients.phoneInput);
        phoneInput.addValue('+375251234567')
        browser.pause(500);

        const descriptionInput = $(clients.descriptionInput);
        descriptionInput.addValue('400 symbols')
        browser.pause(1000);
    });

    it('Click Create button', () => {
        const createBtn = $(clients.createBtn);
        createBtn.click();
    });
})


