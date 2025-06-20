# Saucedemo project for automation testing
SauceLabs e-commerce website UI testing using Webdriver IO

Project URL: https://www.saucedemo.com/

Packages: wdio, mocha, allure-reporter, allure-commandline, wdio-wait-for

Required latest Node version and latest Java to run allure-commandline.

## Author
- [@Mohammad Sakib Ahsan](https://github.com/thesakib2020)

## Scenarios to test: 

    - Login
    - Add Products to cart and checkout page verification
    - Filter Products to checkout page verification

Scope: UI Testing

## Assessments


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

