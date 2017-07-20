var BasePage = require('./BasePage');
var protractor = require('protractor');

var by = new protractor.ProtractorBy();
var should = require('chai').should();

function ItemPage() {
    var addComparisonSelector = 'li#product-compare-control',
        showComparisonSelector = 'div.compare-button_visible>div>div>div>a:nth-child(2)',
        comparisonBarSelector = 'div.compare-button_visible';

    this.addToComparison = function() {
        return this.clickCss(addComparisonSelector);
    };

    this.showComparison = function() {
        return this.clickCss(showComparisonSelector);
    };

    this.checkCompBar = function() {
        var comparisonBar = by.css(comparisonBarSelector);
        return this.checkPresence(comparisonBar);
    };
};

ItemPage.prototype = BasePage;
module.exports = new ItemPage();