var seleniumWebdriver = require('selenium-webdriver');
var protractor = require('protractor');
var by = new protractor.ProtractorBy();
var EC = new protractor.ProtractorExpectedConditions();

var BasePage = function() {

    var waitTime = 20000;

    this.visit = function(url) {
        return browser.get(url || 'https://www.onliner.by');
    };

    this.clickCss = function(selector) {
        return browser.element(by.css(selector)).click();
    }

    this.isTextPresentOnPage = function(text) {
        var locator = "//*[contains(text(),'" + text + "')]";
        var condition = seleniumWebdriver.until.elementLocated({ xpath: locator });
        return browser.wait(condition, waitTime);
        //mb change to isTitlePresentOnPage and check for h1 with given text
    };

    this.waitScrollClick = function(elementLocator) {
        return this.checkPresence(elementLocator).then(() => {
            return browser.element.all(elementLocator).first();
        }).then((element) => {
            browser.executeScript("arguments[0].scrollIntoViewIfNeeded();", element.getWebElement());
            return element.click();
        });
    };

    this.linkTextWaitScrollClick = function(linkText) {
        var elementLocator = by.partialLinkText(linkText);
        return this.waitScrollClick(elementLocator);
    };

    this.checkPresence = function(elementLocator) {
        var condition = EC.presenceOf(browser.element.all(elementLocator));
        return browser.wait(condition, waitTime);
    };

};
module.exports = new BasePage();