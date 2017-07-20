var { defineSupportCode } = require('cucumber');
var searchPage = require('../../po/SearchPage');

defineSupportCode(function({ Given, When, Then }) {
    
    When(/^I click on "([^"]*)" item$/, function(item) {
        return searchPage.itemClick(item);
    });

    When(/^I click on "([^"]*)" filter$/, function(filter) {
        return searchPage.setFilter(filter);
    });

});