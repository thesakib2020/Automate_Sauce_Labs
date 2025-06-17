//Spec file to execute the steps to verify invalid login

const loginActions = require("../Actions/loginActions");

const user = "locked_out_user";
const password = "secret_sauce";
const error = "Epic sadface: Sorry, this user has been locked out.";

//Suite containing the test cases 
describe("Login error test suite", ()=>{
//Test case to login with locked_out_user
    it("Verify user cannot login", async()=>{
        await loginActions.writeUsername(user);
        await loginActions.writePPassword(password);
        await loginActions.loginBtnClick();
    })
//Tesst case to verify the error message
    it("Verify the error message during login", async()=>{
        expect(loginActions.errorMsg).toHaveValue(error);
    })
})