var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ After, setDefaultTimeout }) {
    After( function() {
        return browser.quit();
    });

    setDefaultTimeout(60 * 1000);
});