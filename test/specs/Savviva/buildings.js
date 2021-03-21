
let assert = require('assert');

// function checkElementAppearance(nameButton) {
//
// }

describe('Savviva page', (nameButton) => {
    it('should have the right title', () => {
        browser.url('https://web.savviva.inside.cactussoft.biz/buildings')
        const title = browser.getTitle();
        assert.strictEqual(title, 'SavvivaBoard');
    });

    it ('clickable buttons', () => {
            browser.url('https://web.savviva.inside.cactussoft.biz/buildings')
            const nameButton = $ ('//div[contains(text(), \'Name\')]')
            browser.pause(1000);
            nameButton.click()
            browser.pause(1000);

            const countryButton = $ ('//div[contains(text(),\'Country\')]')
            browser.pause(1000);
            countryButton.click()
            browser.pause(1000);

            const cityButton = $ ('//div[contains(text(), \'City\')]')
            browser.pause(1000);
            cityButton.click()
            browser.pause(1000);

            const addressButton = $ ('//div[contains(text(),\'Address\')]')
            browser.pause(1000);
            addressButton.click()
            browser.pause(1000);

            const typeButton = $ ('//div[contains(text(), \'Type\')]')
            browser.pause(1000);
            typeButton.click()
            browser.pause(1000);

            const statusButton = $ ('//div[contains(text(), \'Status\')]')
            browser.pause(1000);
            statusButton.click()
            browser.pause(1000);

    //     });
    // async checkElementAppearance(nameButton) {
    //     if (await nameButton.isExisting()) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }



})