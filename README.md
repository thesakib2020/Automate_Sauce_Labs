# Saucedemo project for automation testing
SauceLabs e-commerce website UI testing using Webdriver IO

Project URL: https://www.saucedemo.com/

Packages: wdio, mocha, allure-reporter, allure-commandline, wdio-wait-for

Required latest Node version and latest Java to run allure-commandline.

## Author
- [@Mohammad Sakib Ahsan](https://github.com/thesakib2020)

## Scenarios to test: 
-- Login
-- Add Products to cart and checkout page verification
-- Filter Products to checkout page verification

Scope: UI Testing

## Assessment Questions:
Q1: Try login with locked_out_user and verify the error message.

Q2: Log in with standard_user. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

Q3: Login with performance_glitch_user and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the products' names and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.


## Clone locally
Clone project to your machine:
```bash
git clone https://github.com/thesakib2020/Automate_Sauce_Labs.git
```

Install node js and java by searching in google.

Install wdio
```bash
npm init wdio@latest .
```
Install Allure Reporter
```bash
npm install @wdio/allure-reporter --save-dev
```
Install Allure Commandline
```bash
npm i allure-commandline
```
Run all tests parallelly from the suite
```bash
npm run wdio --suite allSuites
```
Run Q1 in assessment individually
```bash
npm run Q1
```
Run Q2 in assessment individually
```bash
npm run Q2
```
Run Q3 in assessment individually
```bash
npm run Q3
```
Generate Allure Report
```bash
allure generate allure-results --clean
```
View Allure Report
```bash
allure open allure-report

