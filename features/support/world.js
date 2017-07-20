require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var protractor = require('protractor');
var plugins = require('protractor/built/plugins.js');
var { defineSupportCode } = require('cucumber');

function CustomWorld() {
    browser = new protractor.ProtractorBrowser(
        new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build());
    
    browser.ignoreSynchronization = true;
    browser.plugins_ = new plugins.Plugins({});
    browser.driver.manage().window().setSize(1200, 900);
}

defineSupportCode(function({ setWorldConstructor }) {
    setWorldConstructor(CustomWorld)
})