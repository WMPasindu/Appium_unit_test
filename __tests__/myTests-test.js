import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: '5.4  FWVGA API 30',
    app: 'D:/Assingment/Lab05/android/app/build/outputs/apk/debug//app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
}) // Sometime for the app to load
test('my first appium test', async () => {
    expect(await driver.hasElementByAccessibilityId('textInput')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('buttonText')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});

test('test main_view TextInput value ading', async() => {
    expect(await driver.hasElementByAccessibilityId('textInput')).toBe(true);
    await driver.elementByAccessibilityId('textInput').type('MS_21910968')
});

test('test main_view button click', async() => {
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('alertButton')
    await element.click()
});
