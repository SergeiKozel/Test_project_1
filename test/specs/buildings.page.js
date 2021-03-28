const buildings = require('../pageobjects/buildings');
const { link } = require('../links/buildingslink');
//let assert = require('assert');


describe
('Buildings page', () => {
//will be changed after login page readiness
    it('login', () => {
        link.open
        const loginLink = $('//a[contains(text(),\'Login\')]');
        browser.pause(500);
        loginLink.click()
        browser.pause(1500);
    });

    //if async should use await
    it('click sort buttons', () => {
        const nameBtn = $(buildings.nameBtn);
        nameBtn.waitForDisplayed();
        nameBtn.click();

        const countryBtn =  $(buildings.countryBtn);
        countryBtn.waitForDisplayed();
        countryBtn.click();

        const cityBtn =  $(buildings.cityBtn);
        cityBtn.waitForDisplayed();
        cityBtn.click();

        const addressBtn = $(buildings.addressBtn);
        addressBtn.waitForDisplayed();
        addressBtn.click();

        const typeBtn =  $(buildings.typeBtn);
        typeBtn.waitForDisplayed();
        typeBtn.click();

        const statusBtn =  $(buildings.statusBtn);
        statusBtn.waitForDisplayed();
        statusBtn.click();

         });

});