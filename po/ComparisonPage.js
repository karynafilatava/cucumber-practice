var BasePage = require('./BasePage');
var protractor = require('protractor');

var by = new protractor.ProtractorBy();
var should = require('chai').should();

function ComparisonPage() {

    this.whatsBetter = function(item1, item2) {
        var better,
            advantageItem1,
            advantageItem2;

        browser.element(by.css('th.product-table__cell:nth-child(3)>div>div>a>span')).getText().then((text) => {
            better = text.includes(item1);
        });

        return browser.element.all(by.css('.product-table__cell_accent:nth-child(3)')).count()
            .then(res => advantageItem1 = res)
            .then(() => browser.element.all(by.css('.product-table__cell_accent:nth-child(4)')).count())
            .then(res => advantageItem2 = res)
            .then(() => advantageItem1 > advantageItem2)
            .then((res) => res.should.be.equal(better));
    };

    this.clearComparison = function() {
    	return this.clickCss('.catalog-masthead__aside>a.product-table__clear');
    };
};

ComparisonPage.prototype = BasePage;
module.exports = new ComparisonPage();