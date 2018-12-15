var q = require('./ExcelTest.js');

var username =  q.getValue("A2")
    console.log( username );
var password = q.getValue("B2");

describe("Test Login",function(){
    it("validate user credentials",function(){
        browser.get("http://gmail.com");
        element(by.xpath("//input[@id='identifierId']")).sendKeys(username);
        element(by.xpath("//span[@class='RveJvd snByac'][contains(text(),'Next')]")).click();
        browser.sleep(2000);
        element(by.xpath("//input[@type='password']")).sendKeys(password);
        element(by.css("#signIn")).click();
        element(by.css("#errormsg_0_Passwd")).getText().then(function(text){
            console.log(text);
        });
    });
});
