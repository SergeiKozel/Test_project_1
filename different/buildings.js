

import Page from "../test/pageobjects/buildings";

let assert = require('assert');

describe('Savviva page', () => {
        it('smth like login', () => {
                //browser.url('https://web.savviva.inside.cactussoft.biz/buildings');
                Page.open
                const loginLink = $('//a[contains(text(),\'Login\')]');
                browser.pause(1000);
                loginLink.click()
                browser.pause(1500);
                //.reload() // window.location.reload()
        });


        it('right title', () => {
                const title = browser.getTitle();
                assert.strictEqual(title, 'SavvivaBoard');
        });

        it('click sort buttons', () => {
                const nameButton = $('//div[contains(text(), \'Name\')]')
                browser.pause(1000);
                nameButton.click()
                browser.pause(1000);

                const countryButton = $('//div[contains(text(),\'Country\')]')
                browser.pause(1000);
                countryButton.click()
                browser.pause(1000);

                const cityButton = $('//div[contains(text(), \'City\')]')
                browser.pause(1000);
                cityButton.click()
                browser.pause(1000);

                const addressButton = $('//div[contains(text(),\'Address\')]')
                browser.pause(1000);
                addressButton.click()
                browser.pause(1000);

                const typeButton = $('//div[contains(text(), \'Type\')]')
                browser.pause(1000);
                typeButton.click()
                browser.pause(1000);

                const statusButton = $('//div[contains(text(), \'Status\')]')
                browser.pause(1000);
                statusButton.click()
                browser.pause(1000);
        });
   })
