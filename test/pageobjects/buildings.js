class buildings {
    get nameBtn() { return $('//div[contains(text(), \'Name\')]' }
    get countryBtn () { return $('//div[contains(text(),\'Country\')]') }
    get cityBtn() { return $('//div[contains(text(), \'City\')]') }
    get addressBtn() { return $('//div[contains(text(),\'Address\')]') }
    get typeBtn() { $('//div[contains(text(), \'Type\')]') }
    get statusBtn() { return $('//div[contains(text(), \'Status\')]') }
    }
module.exports = buildings();

