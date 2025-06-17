//Spec file to execute the steps to complete a checkout journey
const loginActions = require("../Actions/loginActions");
const checkOutActions = require("../Actions/checkoutActions");
const cartItemsActions = require("../Actions/cartItemText");
const successMessageActions = require("../Actions/successMsgChk");

const user = "standard_user";
const password = "secret_sauce";
const firstName = "first_test_1";
const lastName = "last_test_1";
const zipCode = "77071";
const expectedThankYouMsg = "Thank you for your order!"
const expectedOrderDispatchMsg = "Your order has been dispatched, and will arrive just as fast as the pony can get there!"

//Test suite
describe("Checkout process suite", ()=>{
//Test case to login with "standard_user"
    it("Verify user can login", async()=>{
        await loginActions.writeUsername(user);
        await loginActions.writePPassword(password);
        await loginActions.loginBtnClick();
    })
//Test case to reset app
    it("Verify app reset", async()=>{
        await checkOutActions.hamburgerMenuClick();
        await checkOutActions.resetAppClick();
        await checkOutActions.sideBarClose();
    })
//Test case to add 3 items to cart
    it("Verify user can add 3 items to cart", async()=>{
        await checkOutActions.addItem1();
        await checkOutActions.addItem2();
        await checkOutActions.addItem3();
//Test case to navigate to the final checkout page 
        await checkOutActions.goToCart();
        await checkOutActions.checkoutBtnClick();
    })    
//Test case to fill out checkout form
    it("Verify user can fillout form to checkout", async()=>{
/* This line calls out a reusuable function to fill out the 
checkout form.
*/
        await checkOutActions.checkoutForm(firstName, lastName, zipCode);
        await checkOutActions.continueBtnClick();
    })  
//Test case to verify the added item names in the overview page
    it("Verify overview page item names are same as the product page", async()=>{
        expect(cartItemsActions.item1Name).toHaveValue(cartItemsActions.overviewItem1Name);
        expect(cartItemsActions.item2Name).toHaveValue(cartItemsActions.overviewItem2Name);
        expect(cartItemsActions.item3Name).toHaveValue(cartItemsActions.overviewItem3Name);
    })
//Test case to verify the total price
    it("Verify the total price is correct", async()=>{
        const itemTotal = cartItemsActions.overviewItem1Price()+cartItemsActions.overviewItem2Price()+cartItemsActions.overviewItem3Price();
        const tax = itemTotal * 0.08;
        const expectedTotal = itemTotal + tax;
/* Expected total price needs to equal to the Total price 
displayed on the Checkout:Overview page
*/ 
        expect(expectedTotal).toHaveValue(cartItemsActions.overviewTotal());
        await checkOutActions.finishBtnClick();
    })
//Test case to verify the success confirmation message
    it("Verify the success message after checkout", async()=>{
        expect(successMessageActions.thankYou()).toHaveText(expectedThankYouMsg);
        expect(successMessageActions.orderDispatch()).toHaveText(expectedOrderDispatchMsg);
    })
//Test case to reset the app
    it("Verify user can Reset App after success message", async()=>{
        await checkOutActions.hamburgerMenuClick();
        await checkOutActions.resetAppClick();
    })
//Test case to logout
    it("Verify user can logout", async()=>{
        await checkOutActions.logOutClick();
    })
})