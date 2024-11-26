const webdriver = require('selenium-webdriver');

(async () => {
    // Build a driver instance for Chrome
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        // Open the local HTML file in the browser
        await driver.get('file://' + __dirname + '/index.html');
        console.log('Webpage opened successfully');
    } catch (error) {
        console.error('Error while opening the webpage:', error);
    }

    // Wait for user input to close the driver
    process.stdin.setRawMode(true).resume();
    console.log('Press any key to exit...');
    process.stdin.on('data', async () => {
        await driver.quit();
        process.exit(0);
    });
})();
