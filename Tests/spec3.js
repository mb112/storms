var home = require("../Pages/home.page.js")
var testData = require("../TestData/data.json")
var pgp = require('pg-promise')(/*options*/);

describe('Login with DB connection', () => {

    var connectionString = {
        host:'room-reservation-qa.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
        port:5432,
        database:'room_reservation_qa',
        user:'qa_user',
        password:'Cybertek11!'
    }
    var db = pgp(connectionString)
    var arr=[];
    var username = '';
    var pass = '';
    it('Test Case 3 - Login to Website wit DB connection', () => {


        db.any(`SELECT firstname,lastname,email from users where email='efewtrell8c@craigslist.org'`)
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
        
    });
    
});