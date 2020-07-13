describe('demo Login tests'), function () {

    if ('valid user login', function () {
        browser.get('http://localhost:9020/');
        element(by.name('uname')).sendKeys('testUser1@nagarro.com');
        element(by.name('psw')).sendKeys('testUser1');
        element(by.name('btnSubmit')).click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:9020/dashboard.html');

    });

    if ('inValid user name and inValid password', function () {
        browser.get('http://localhost:9020/');
        element(by.name('uname')).sendKeys('abc@nagarro.com');
        element(by.name('psw')).sendKeys('abc');
        element(by.name('btnSubmit')).click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:9020/')

    });

    if ('Valid user name and inValid password', function () {
        browser.get('http://localhost:9020/');
        element(by.name('uname')).sendKeys('testUser1@nagarro.com');
        element(by.name('psw')).sendKeys('abc');
        element(by.name('btnSubmit')).click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:9020/')

    });

    if ('inValid user name and valid password', function () {
        browser.get('http://localhost:9020/');
        element(by.name('uname')).sendKeys('abc@nagarro.com');
        element(by.name('psw')).sendKeys('testUser1');
        element(by.name('btnSubmit')).click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:9020/')

    });


}