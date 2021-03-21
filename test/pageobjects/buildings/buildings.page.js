class buildings {

    get nameButton() {return $ ('//div[contains(text(), 'Name')]') }
    get Country() {return $ ('//div[contains(text(),\'Country\')]') }
    get City() {return $ ('//div[contains(text(), \'City\')]') }
    get Type() {return $ ('//div[contains(text(),\'Type\')]') }
    get Status() {return $ ('//div[contains(text(),\'Status\')]')}


    async checkElementAppearance(elementName) {
        if (await elementName.isExisting()) {
            return true
        } else {
            return false
        }
    }

}

module.exports = new linkInsights();