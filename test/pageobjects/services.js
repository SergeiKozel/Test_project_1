class services {
    get nameBtn()          { return $('//div[contains(text(),\'Name\')]')}
    get clientBtn()        { return $('//div[contains(text(),\'Client\')]')}
    get creationDateBtn()  { return $('//div[contains(text(),\'Creation date\')]')}
    get creatorBtn()       { return $('//div[contains(text(),\'Creator\')]')}
    get statusBtn()        { return $('//div[contains(text(),\'Status\')]')}

    get nextPageBtn()      { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-services-board[1]/div[1]/cactussoft-table[1]/mat-paginator[1]/div[1]/div[1]/div[2]/button[2]/span[1]/*[1]')}

    get createNewBtn()     { return $('//span[contains(text(),\'Create New\')]')}

    get selectBtn()        { return $('//label[contains(text(),\'Select file\')]') }
    get nameInput()        { return $('//input[@id=\'mat-input-1\']') }
    get currencyBtn()      { return $('//div[@id=\'mat-select-value-1\']') }
    get currencyEuro()     { return $('//body/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[1]/span[1]') }
    get category()         { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-service[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]/span[1]') }
    get categoryMob()      { return $('//body/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[5]/span[1]')}
    get subCategory()      { return $('//body/cactussoft-root[1]/cactussoft-container[1]/div[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/cactussoft-create-service[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]/span[1]') }
    get subCategoryTaxi()  { return $('//span[contains(text(),\'Taxi\')]')}
    get addCategory()      { return $('//div[contains(text(),\'+ Add Category\')]')}
    get delCategory()      { return $('//mat-icon[contains(text(),\'delete\')]')}

    // add drug&drop items


    get createBtn()         { return $('//div[contains(text(),\'Create\')]') }

}
module.exports = new services();