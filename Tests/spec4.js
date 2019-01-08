var home = require("../Pages/home.page.js")
var testData = require("../TestData/data.json")
var pgp = require('pg-promise')(/*options*/);
var connectionString = require ('../TestData/dbConnection.js')
var queries = require ('../TestData/queries.js')

describe('Login with DB connection', () => {

    var db = pgp(connectionString)
    var arr=[];
    var username = '';
    var pass = '';

    it('Test Case 4 - Login to Website wit DB connection', () => {
         //Fetch the data from database

        db.any(queries.q1)
        .then(function(result){
            arr=result;
            username = result[0].email;
            pass =result[0].firstname.toLowerCase()+result[0].lastname.toLowerCase();
            console.log(pass)
        })
        .catch(function(error){
            concole.log(error)
        })
        .then(function(){
        // ALL automation code
        browser.get("https://cybertek-reservation-qa.herokuapp.com/sign-in");
        browser.sleep(1000)
        home.email.sendKeys(username)
        browser.sleep(1000)
        home.password.sendKeys(pass)
        home.signInButton.click()
        browser.sleep(2000)
        expect(home.title.getText()).toEqual("VA")
        })
        topNavigation.my.click();
        topNavigation.self.click()
        
    });
    
});