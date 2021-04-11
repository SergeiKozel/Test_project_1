const buildings = require('../test/pageobjects/buildings');
const {links}  = require('../test/links/links');

//let assert = require('assert');

describe ('Buildings page', () => {
//!will be changed after login page readiness
    it('login', () => {
        browser.url(links.buildings);
        const loginLink = $('//a[contains(text(),\'Refresh\')]');
        loginLink.click()
        browser.pause(1500);
    });


    //if async should use await
    it('Click sort buttons', () => {
        const nameBtn = $(buildings.nameBtn);
        nameBtn.waitForDisplayed();
        browser.pause(500);
        nameBtn.click();

        const countryBtn =  $(buildings.countryBtn);
        //countryBtn.waitForDisplayed();
        browser.pause(500);
        countryBtn.click();

        const cityBtn =  $(buildings.cityBtn);
        //cityBtn.waitForDisplayed();
        browser.pause(500);
        cityBtn.click();

        const addressBtn = $(buildings.addressBtn);
        //addressBtn.waitForDisplayed();
        browser.pause(500);
        addressBtn.click();

        const typeBtn =  $(buildings.typeBtn);
        //typeBtn.waitForDisplayed();
        browser.pause(500);
        typeBtn.click();

        const statusBtn =  $(buildings.statusBtn);
        //statusBtn.waitForDisplayed();
        browser.pause(500);
        statusBtn.click();

    });

    //it('Search smth', () => {
    //}
});


describe ('Create new building', () => {

    it('Click Create New', () => {
        const createBtn = $(buildings.createBtn);
        createBtn.click();
    });
//!check uploading
    it('Upload photo', () => {
        const selectBtn = $(buildings.selectBtn);
        selectBtn.click();
        const path = require('path');
        const filePath = path.join(__dirname, '../../testData/image.jpg');
    // .waitForDisplayed();
    });

    it('Choose type of building', () => {
        const typeOfBuilding = $(buildings.typeOfBuilding);
        typeOfBuilding.click();
        browser.pause(100);
        const typeHotel = $(buildings.typeHotel);
        typeHotel.click();
    });

    it('Fill needed fields', () => {
        const name = $(buildings.nameInput);
        name.addValue('Big building')
        browser.pause(100);

        const country = $(buildings.countryInput);
        country.addValue('Belarus');
        browser.pause(100);

        const city = $(buildings.cityInput);
        city.addValue('Minsk');
        browser.pause(100);

        const address = $(buildings.addressInput);
        address.addValue('Lenin str. 15-65');
        browser.pause(100);

        const description = $(buildings.descriptionInput);
        description.addValue('Any description for creating 123456789 !@#$%^&*()_+');
        browser.pause(100);
    });
//to refactor
    it('Add new parameters', () => {
        const addNewParameters = $(buildings.addNewButton);
        addNewParameters.click();
        browser.pause(100);

        const numberOfFloors = $(buildings.floorsBox);
        numberOfFloors.click();
        browser.pause(100);

        const numberOfLifts = $(buildings.liftsBox);
        numberOfLifts.click();
        browser.pause(100);

        const squareMeters = $(buildings.metersBox);
        squareMeters.click();
        browser.pause(100);

        const capacity = $(buildings.capacityBox);
        capacity.click();
        browser.pause(100);

        const conferenceRooms = $(buildings.confRoomsBox);
        conferenceRooms.click();
        browser.pause(100);

        const diningRooms = $(buildings.diningRoomsBox);
        diningRooms.click();
        browser.pause(100);

    });

    it('Fill additional parameters', () => {
        const floors = $(buildings.floorsInput);
        floors.addValue('15');
        browser.pause(100);

        const lifts = $(buildings.liftsInput);
        lifts.addValue('3');
        browser.pause(100);

        const meters = $(buildings.metersInput);
        meters.addValue('1200');
        browser.pause(100);

        const capacity = $(buildings.capacityInput);
        capacity.addValue('300');
        browser.pause(100);

        const conference = $(buildings.conferenceInput);
        conference.addValue('9');
        browser.pause(100);

        const dining = $(buildings.diningInput);
        dining.addValue('3');
        browser.pause(500);

    });

    it('Click Create button', () => {
        const create = $(buildings.create);
        //create.waitForClickable({ timeout: 3000 });
        //create.isDisplayed()
        //driver.executeScript('arguments[0].click()', create)
        //driver.findElement( By.Path('//div[contains(text(),\'Create\')]') ).click();
        browser.elementClick(create)
        //create.click();
    });
})
