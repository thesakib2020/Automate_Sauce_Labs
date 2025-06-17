/*
This file contains the locators to the elements that are used
to filter products and add one product to cart.
*/

class filterObjects{
    get dropdownMenu(){
        return $("//select[@class='product_sort_container']")
    }
    get filterZtoA(){
        return $("//select[@class='product_sort_container']/option[2]")
    }
    get addFirstItem(){
        return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    }
}

//Export
module.exports = new filterObjects();