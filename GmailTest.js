var Objects = require('./Objects.json');
var using = require('jasmine-data-provider');
describe("Test Gmail",function() {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get(Objects.testsiteurl);
        console.log("Test site URl is :" + Objects.testsiteurl);
    });
    function plusProvider(){
        return[
            {username:Objects.userdetails.username,password:Objects.userdetails.password},
            {username:Objects.userdetails.username2,password:Objects.userdetails.password2}
            ];
    }
    using(plusProvider, function (data) {
        it("validate user credentials", function () {
            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(Objects.userdetails.username)
            element(by.xpath(Objects.locators.loginpage.next)).click();
        });
    });
});