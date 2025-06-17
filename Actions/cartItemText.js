const cartItemText = require("../Locators/cartItems");

//define a class to get the text value of all items added to cart
class cartItems{
    async item1Name(){
        await cartItemText.cartItem1Name.getText();
    }
    async item2Name(){
        await cartItemText.cartItem2Name.getText();
    }
    async item3Name(){
        await cartItemText.cartItem3Name.getText();
    }
    async item1Price(){
        await cartItemText.cartItem1Price.getValue();
    }
    async item2Price(){
        await cartItemText.cartItem2Price.getValue();
    }
    async item3Price(){
        await cartItemText.cartItem3Price.getValue();
    }
    async productPageItemPrice(){
        await cartItemText.oneCartItemPrice.getValue();
    }
}

class overviewItems{
    async overviewItem1Name(){
        await cartItemText.overviewItem1Name.getText();
    }
    async overviewItem2Name(){
        await cartItemText.overviewItem2Name.getText();
    }
    async overviewItem3Name(){
        await cartItemText.overviewItem3Name.getText();
    }
    async overviewItem1Price(){
        await cartItemText.overviewItem1Price.getValue();
    }
    async overviewItem2Price(){
        await cartItemText.overviewItem2Price.getValue();
    }
    async overviewItem3Price(){
        await cartItemText.overviewItem3Price.getValue();
    }
    async overviewTotal(){
        await cartItemText.overviewTotalPrice.getValue();
    }
    async overviewPageItemPrice(){
        await cartItemText.oneCartItemPrice.getValue();
    }
    async oneItemPriceOverviewPage(){
        await cartItemText.oneItemPriceOverviewPage.getValue();
    }
}

//export
module.exports = new cartItems();
module.exports = new overviewItems();