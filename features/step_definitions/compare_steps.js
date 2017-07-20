var { defineSupportCode } = require('cucumber');
var itemPage = require('../../po/ItemPage');
var comparisonPage = require('../../po/ComparisonPage');


defineSupportCode(function({ Given, When, Then }) {

    When(/^I add item to comparison$/, function() {
        return itemPage.addToComparison();
    });

    When(/^I click on comparison bar$/, function() {
       return itemPage.showComparison();
    });

    When(/^I delete items from comparison$/, function() {
        return comparisonPage.clearComparison();
    });

    Then(/^I should see comparison bar$/, function() {
        return itemPage.checkCompBar();
    });

    Then(/^I should see that "([^"]*)" is better than "([^"]*)"$/, function(item1, item2) {
        return comparisonPage.whatsBetter(item1, item2);
    });
});