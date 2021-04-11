class clients
    {
    get nameBt()            { return $('//div[contains(text(),\'Name\')]') }
    get emailBtn ()         { return $('//div[contains(text(),\'Email\')]') }
    get phoneBtn()          { return $('//div[contains(text(),\'Phone\')]') }
    get servicesBtn()       { return $('//div[contains(text(),\'Services\')]') }
    get statusBtn()         { return $('//div[contains(text(),\'Status\')]') }

    get createNewBtn()      { return $('//span[contains(text(),\'Create New\')]') }

    get selectBtn()         { return $('//label[contains(text(),\'Select file\')]') }
    get buildingsBtn()      { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-client[1]/div[1]/form[1]/div[1]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]/span[1]') }
    get holidayBox()        { return $('//span[contains(text(),\'Holiday Inn Hotel\')]')}
    get loonaBox()          { return $('//span[contains(text(),\'Loona Business\')]') }
    get technoBtn()         { return $('//span[contains(text(),\'TechnoPark West\')]') }

    //get typeOfClientsBtn()  { return $('//mat-label[contains(text(),\'Type of client\')]') }
        get typeOfClientsBtn()  { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-client[1]/div[1]/form[1]/div[1]/div[2]/mat-form-field[2]/div[1]/div[1]') }

    get typeBusiness()      { return $('//span[contains(text(),\'Business\')]') }
    get typeResidential()   { return $('//span[contains(text(),\'Residential\')]') }
    get typeOrganisation()  { return $('//span[contains(text(),\'Organization\')]') }

    get nameInput()         { return $('//input[@id=\'mat-input-1\']') }
    get emailInput()        { return $('//input[@id=\'mat-input-2\']') }
    get phoneInput()        { return $('//input[@id=\'mat-input-3\']')}
    get descriptionInput()  { return $('//textarea[@id=\'mat-input-4\']') }

    //get activeButton()    { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-client[1]/div[1]/form[1]/div[2]/mat-radio-group[1]/mat-radio-button[1]/label[1]/span[1]/span[1]') }

    get createBtn()         { return $('//div[contains(text(),\'Create\')]') }
   }
module.exports = new clients();