const clients = require('../pageobjects/clients');
const {links}  = require('../links/links');

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
//     it('Upload photo', () => {
//         const selectBtn = $(clients.selectBtn);
//         selectBtn.waitForDisplayed();
//         selectBtn.click();
//         browser.pause(100);
//         const path = require('path');
//         const filePath = path.join(__dirname, '../../testData/client.jpg');
//         // .waitForDisplayed();
//     });

    it('Choose buildings', () => {
        const buildingBtn = $(clients.buildingsBtn);
        buildingBtn.click();
        browser.pause(100);

        const holidayBox = $(clients.holidayBox);
        holidayBox.click();

        const loonaBox = $(clients.loonaBox);
        loonaBox.click();

        const technoBtn = $(clients.technoBtn);
        technoBtn.click();
    });

    it('Choose type of client', () => {
        const typeOfClientsBtn = $(clients.typeOfClientsBtn);
        typeOfClientsBtn.click();
        const typeBusiness = $(clients.typeBusiness);
        typeBusiness.click();
    });

    it('Fill needed fields', () => {
        const nameInput = $(clients.nameInput);
        nameInput.addValue('Sergey QA');

        const emailInput = $(clients.emailInput);
        emailInput.addValue('automation@test.com');

        const phoneInput = $(clients.phoneInput);
        phoneInput.addValue('+375251234567')

        const descriptionInput = $(clients.descriptionInput);
        descriptionInput.addValue('400 symbols')
    });

    it('Click Create button', () => {
        const createBtn = $(clients.createBtn);
        createBtn.click();
    });
})


