//This section contains cart item name locators in the Your Cart page

class cartItemsInYourCart{
    get cartItem1Name(){
        return $("//div[contains(text(),'Sauce Labs Backpack')]")
    }
    get cartItem2Name(){
        return $("//div[contains(text(),'Sauce Labs Bike Light')]")
    }
    get cartItem3Name(){
        return $("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]")
    }
    get cartItem1Price(){
        return $("(//div[@class='item_pricebar'])[1]/div[1]")
    }
    get cartItem2Price(){
        return $("(//div[@class='item_pricebar'])[2]/div[1]")
    }
    get cartItem3Price(){
        return $("(//div[@class='item_pricebar'])[3]/div[1]")
    }
    get oneCartItemPrice(){
        return $("(//div[@class='inventory_item_price'])[1]")
    }
}

//This section contains locators in the final checkout overview page

class itemsOverviewPage{
    get overviewItem1Name(){
        return $("//div[contains(text(),'Sauce Labs Backpack')]")
    }
    get overviewItem2Name(){
        return $("//div[contains(text(),'Sauce Labs Bike Light')]")
    }
    get overviewItem3Name(){
        return $("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]")
    }
    get overviewItem1Price(){
        return $("(//div[@class='item_pricebar'])[1]/div[1]")
    }
    get overviewItem2Price(){
        return $("(//div[@class='item_pricebar'])[2]/div[1]")
    }
    get overviewItem3Price(){
        return $("(//div[@class='item_pricebar'])[3]/div[1]")
    }
    get overviewTotalPrice(){
        return $("//div[@class='summary_total_label']")
    }
    get oneItemOverviewPage(){
        return $("//div[@class='summary_total_label']")
    }
}

//Export class
module.exports = new cartItemsInYourCart();

//Export class
module.exports = new itemsOverviewPage();
