//define the actions to be taken on the login page

const loginObject = require("../Locators/loginObject");

class loginActions{
    async writeUsername(user){
        await loginObject.userNameText.setValue(user);
    }
    async writePPassword(password){
        await loginObject.passWordText.setValue(password);
    }
    async loginBtnClick(){
        await loginObject.loginBtn.click();
    }
    async errorMsg(){
        await loginObject.errorMsg();
    }
}

//export the class
module.exports = new loginActions();
