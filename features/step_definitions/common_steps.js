var { defineSupportCode } = require('cucumber');
var basePage = require('../../po/BasePage');

defineSupportCode(function({ Given, When, Then }) {

    Given(/^I am on the onliner home page$/, function() {
        return basePage.visit();
    });

    When(/^I click on "([^"]*)" link$/, function(linkText) {
        return basePage.linkTextWaitScrollClick(linkText);
    });

    Then(/^I should see "([^"]*)"$/, function(text) {
        return basePage.isTextPresentOnPage(text);
    });
});