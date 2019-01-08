var home = require("../Pages/home.page.js")
var testData = require("../TestData/data.json")

describe('POM and Testdata', () => {
    it('Test Case 2 - Login  to the POM and Testdata', () => {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/sign-in");
        browser.sleep(1000)
        home.email.sendKeys(testData.email)
        browser.sleep(1000)
        home.password.sendKeys(testData.password)
        home.signInButton.click()
        browser.sleep(2000)
        expect(home.title.getText()).toEqual("VA")
        
    });
    
});
