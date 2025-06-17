/*Spec file to execute the steps to filter the product page,
add an item to the cart, verify it's name and price in the final
checkout page and verify the confirmation success message.
*/ 
const loginActions = require("../Actions/loginActions");
const checkOutActions = require("../Actions/checkoutActions");
const cartItemsActions = require("../Actions/cartItemText");
const filterObjectActions = require("../Actions/filterObjectActions");

const user = "performance_glitch_user";
const password = "secret_sauce";
const firstName = "first_test_1";
const lastName = "last_test_1";
const zipCode = "77071";

describe("Filtering items and checkout suite", ()=>{
//Test case to login
    it("Verify user login", async()=>{
        await loginActions.writeUsername(user);
        await loginActions.writePPassword(password);
        await loginActions.loginBtnClick();
    })
//Test case to reset the app
    it("Verify resetting app", async()=>{
        await checkOutActions.hamburgerMenuClick();
        await checkOutActions.resetAppClick();
        await checkOutActions.sideBarClose();
    })   
//Test case to filter products
    it("Verify user can filter product by name (Z to A)", async()=>{
        await filterObjectActions.dropdownMenuClick();
        await filterObjectActions.filterZtoAClick();
    })
//Test case to add an item to the cart
    it("Verify user can the first item to cart", async()=>{
        await checkOutActions.firstItemAdd();
    })
//Test case to navigate to the cart and checkout
    it("Verify user can navigate to cart and checkout", async()=>{
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
//Test case to verify the added item name in the overview page
    it("Verify overview page item name is same as the product page", async()=>{
        expect(checkOutActions.overviewItemName()).toHaveValue(checkOutActions.productPageFirstItemName());
    })   
//Test case to verify the item price
    it("Verify the overview page's price is correct", async()=>{
        const itemTotal = cartItemsActions.oneItemPriceOverviewPage();
        const tax = itemTotal * 0.08;
        const expectedTotal = itemTotal + tax;
/* Expected total price needs to equal to the Total price 
displayed on the Checkout:Overview page
*/      expect(expectedTotal).toHaveValue(cartItemsActions.overviewPageItemPrice());
        await checkOutActions.finishBtnClick();
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