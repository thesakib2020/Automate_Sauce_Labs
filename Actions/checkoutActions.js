//define the actions to be taken on the standard checkout journey

const checkoutObjects = require("../Locators/checkoutObject");
const filterObjects = require("../Locators/filterObject");

class checkoutActions{
    async hamburgerMenuClick(){
        await checkoutObjects.hamburgerMenu.click();
    }
    async resetAppClick(){
        await checkoutObjects.resetAppState.click();
    }
    async addItem1(){
        await checkoutObjects.item1.click();
    }
    async addItem2(){
        await checkoutObjects.item2.click();
    }
    async addItem3(){
        await checkoutObjects.item3.click();
    }
    async goToCart(){
        await checkoutObjects.cartIcon.click();
    } 
    async checkoutBtnClick(){
        await checkoutObjects.checkoutBtn.click();
    }
    async writeFirstName(firstName){
        await checkoutObjects.firstNameText.setValue(firstName);
    }
    async writeLastName(lastName){
        await checkoutObjects.lastNameText.setValue(lastName);
    }
    async writeZipCode(zipCode){
        await checkoutObjects.zipCodeText.setValue(zipCode);
    }

//define a function to reuse during checkout
    async checkoutForm(firstName, lastName, zipCode){
        await this.writeFirstName(firstName);
        await this.writeLastName(lastName);
        await this.writeZipCode(zipCode);
    }
    async continueBtnClick(){
        await checkoutObjects.continueBtn.click();
    }
    async finishBtnClick(){
        await checkoutObjects.finishBtn.click();
    }
    async logOutClick(){
        await checkoutObjects.logOutText.click();
    }
    async firstItemAdd(){
        await filterObjects.addFirstItem.waitForDisplayed({timeout: 15000});
        await filterObjects.addFirstItem.click();
    }
    async firstItemName(){
        await checkoutObjects.firstItem.getText();
    }
    async productPageFirstItemName(){
        await checkoutObjects.productPageFirstItem.getText();
    }
    async overviewItemName(){
        await checkoutObjects.overviewPageItem.getText();
    }
    async sideBarClose(){
        await checkoutObjects.sideBarCloseIcon.click();
    }
}

//export the class
module.exports = new checkoutActions();