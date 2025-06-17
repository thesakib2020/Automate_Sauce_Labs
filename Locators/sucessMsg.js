//This contains the locators to the success message

class successfulOrder{
    get thankYouMessage(){
        return $("//h2[@class='complete-header']")
    }
    get orderDispatchMessage(){
        return $("//div[@class='complete-text']")
    }
}

//Export the class
module.exports = new successfulOrder();