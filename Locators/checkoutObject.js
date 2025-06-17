/*
This file contains all  the locators that are needed to complete
the checkout journey.
*/

class checkout{
    get hamburgerMenu(){
        return $("//button[@id='react-burger-menu-btn']");
    }
    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get item1(){
        return $("//button[@id='add-to-cart-sauce-labs-backpack']");
    }
    get item2(){
        return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
    }
    get item3(){
        return $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    }
    get cartIcon(){
        return $("//a[@class='shopping_cart_link']");
    }
    get checkoutBtn(){
        return $("//button[@id='checkout']");
    }
    get firstNameText(){
        return $("//input[@id='first-name']")
    }
    get lastNameText(){
        return $("//input[@name='lastName']")
    }
    get zipCodeText(){
        return $("//input[@name='postalCode']")
    }
    get continueBtn(){
        return $("//input[@id='continue']")
    }
    get finishBtn(){
        return $("//button[@id='finish']")
    }
    get logOutText(){
        return $("//a[@id='logout_sidebar_link']")
    }
    get firstItem(){
        return $("(//div[@class='pricebar'])[1]")
    }
    get productPageFirstItem(){
        return $("//div[@class='inventory_item_name ']")
    }
    get overviewPageItem(){
        return $("//div[@class='inventory_item_name']")
    }
    get sideBarCloseIcon(){
        return $("(//button[@type='button'])[2]")
    }
}

//Export this class
module.exports = new checkout();