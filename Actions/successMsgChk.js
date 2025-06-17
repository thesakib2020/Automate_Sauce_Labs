const successPage = require("../Locators/sucessMsg")

class successMessage{
    async thankYou(){
        await successPage.thankYouMessage.getText();
    }
    async orderDispatch(){
        await successPage.orderDispatchMessage.getText();
    }
}

//export
module.exports = new successMessage();