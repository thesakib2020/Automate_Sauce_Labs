//This file contains all  the locators that are needed to login.
//It also contains the locator for the error message.

class loginObjects{
    get userNameText(){
        return $("//input[@id='user-name']")
    }
    get passWordText(){
        return $("//input[@id='password']")
    }
    get loginBtn(){
        return $("//input[@id='login-button']")
    }
    get errorMsg(){
        return$("//div[@class='error-message-container error']")
    }
}

//Export the class so it is accessible by other files.
module.exports = new loginObjects();