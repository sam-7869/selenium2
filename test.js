const webdriver = require('selenium-webdriver');
const assert = require('assert');

(async () => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    try {
        await driver.get('file://' + __dirname + '/index.html');
        await driver.findElement(webdriver.By.id('num1')).sendKeys('50');
        await driver.findElement(webdriver.By.id('num2')).sendKeys('10');
        await driver.findElement(webdriver.By.id('add')).click();
        const result = await driver.findElement(webdriver.By.id('result')).getText();
        assert.strictEqual(result, '60');
        console.log('Test passed');
    } catch (error) {
        console.error('Test failed:', error);
    }
    process.stdin.setRawMode(true).resume();
    console.log('Test completed. Press any key to exit...');
    process.stdin.on('data', async () => { await driver.quit(); process.exit(0); });
})();
