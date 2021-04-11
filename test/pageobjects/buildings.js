class buildings
    {
    get nameBtn()           { return $('//div[contains(text(), \'Name\')]') }
    get countryBtn ()       { return $('//div[contains(text(),\'Country\')]') }
    get cityBtn()           { return $('//div[contains(text(), \'City\')]') }
    get addressBtn()        { return $('//div[contains(text(), \'Address\')]') }
    get typeBtn()           { return $('//div[contains(text(), \'Type\')]') }
    get statusBtn()         { return $('//div[contains(text(), \'Status\')]') }
    get createBtn()         { return $('//span[contains(text(), \'Create New\')]') }

    get selectBtn()         { return $('//label[contains(text(),\'Select file\')]') }
    get typeOfBuilding()    { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-building[1]/div[1]/form[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[2]/div[1]')}
    get typeBusiness()      { return $('//span[contains(text(),\'BusinessCenter\')]')}
    get typeResidential()   { return $('//span[contains(text(),\'Residential\')]')}
    get typeHotel()         { return $('//span[contains(text(),\'Hotel\')]')}

    get nameInput()         { return $('//input[@id=\'mat-input-1\']') }
    get countryInput()      { return $('//input[@id=\'mat-input-2\']') }
    get cityInput()         { return $('//input[@id=\'mat-input-3\']') }
    get addressInput()      { return $('//input[@id=\'mat-input-4\']') }
    get descriptionInput()  { return $('//textarea[@id=\'mat-input-5\']') }
    get addNewButton()      { return $('//span[contains(text(),\'Add new\')]') }

    get floorsBox()         { return $('//div[contains(text(),\'Number of floors\')]') }
    get liftsBox()          { return $('//div[contains(text(),\'Number of lifts\')]') }
    get metersBox()         { return $('//div[contains(text(),\'Square meters\')]') }
    get capacityBox()       { return $('// div[contains(text(),\'Capacity\')]') }
    get confRoomsBox()      { return $('//div[contains(text(),\'Conference rooms\')]') }
    get diningRoomsBox()    { return $('//div[contains(text(),\'Dining rooms\')]') }

    get floorsInput()       { return $('//input[@id=\'mat-input-6\']')}
    get liftsInput()        { return $('//input[@id=\'mat-input-7\']')}
    get metersInput()       { return $('//input[@id=\'mat-input-8\']')}
    get capacityInput()     { return $('//input[@id=\'mat-input-9\']')}
    get conferenceInput()   { return $('//input[@id=\'mat-input-10\']')}
    get diningInput()       { return $('//input[@id=\'mat-input-11\']')}

    //get activeButton()      { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-building[1]/div[1]/form[1]/div[3]/mat-radio-group[1]/mat-radio-button[1]/label[1]/span[1]/span[1]')}

    get create()            { return $('//div[contains(text(),\'Create\')]')}
    //get create()      { return $('')}


    }
module.exports = new buildings();

