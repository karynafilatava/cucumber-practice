var BasePage = require('./BasePage');
var protractor = require('protractor');
var by = new protractor.ProtractorBy();

function SearchPage() {
    var itemsSelector = '.schema-product__title>a>span',
        filtersCheckboxesSelector = 'span.schema-filter__checkbox-text';

    this.itemClick = function(item) {
    	browser.sleep(5000);
        var element = by.cssContainingText(itemsSelector, item);
        return this.waitScrollClick(element);
    };

    this.setFilter = function(filterCheckboxText) {
        return browser.element
        		.all(by.cssContainingText(filtersCheckboxesSelector, filterCheckboxText))
        		.first()
        		.click();
    };

};
SearchPage.prototype = BasePage;
module.exports = new SearchPage();