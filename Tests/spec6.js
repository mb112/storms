//Pages
var home        = require("../Pages/home.page.js");
var self        = require("../Pages/self.page.js");
var topNav      = require("../Pages/topNavigation.page.js");

//DB Connection
var pgp                 = require('pg-promise')(/*options*/);
var connectionString    = require("../TestData/dbConnection.js");
var queries             = require("../TestData/queries.js");

var EC = protractor.ExpectedConditions;

describe('Login with DB Connection', () => {
    

    var db = pgp(connectionString);
    var arr=[];
    var username = '';
    var pass = '';

    it('Test Case 6 - Backend Testing Multiple Users Login Information Check', () => {
        
        //Fetch the data from database

        db.any(queries.q3)
        .then(function(result){
            arr=result;
            console.log(arr.length);
            

        }).catch(function(error){
            console.log(error);
        }).then(function(){
            //All UI automation Code
            //elementasRow= 1 row of data (object) we fetched from a database
            //includes firstname, lastname etc.
            arr.forEach(function(elementAsRow){ 
                username = elementAsRow.email;
                pass = elementAsRow.firstname.toLowerCase()+elementAsRow.lastname.toLowerCase();

                //Navigating to page
                browser.get("https://cybertek-reservation-qa5.herokuapp.com/");

                //sign in to the page
                home.email.sendKeys(username);
                home.password.sendKeys(pass);
                home.signinButton.click();
                browser.wait(EC.presenceOf(home.title),6000);

                //Navigating to Self Page
                browser.actions().mouseMove(topNav.my).perform();
                browser.wait(EC.visibilityOf(topNav.self),6000);
                topNav.self.click();
                browser.wait(EC.presenceOf(self.updatePass),6000);

                //Comparing the backend and frontend
                expect(self.dataOnTable.get(0).getText()).toEqual(elementAsRow.firstname + "" + elementAsRow.lastname);
                expect(self.dataOnTable.get(1).getText()).toEqual(elementAsRow.role+"l");
                expect(self.dataOnTable.get(2).getText()).toEqual(elementAsRow.teamname+"l");
                expect(self.dataOnTable.get(3).getText()).toEqual("#" + elementAsRow.batchnumber+"l");
                expect(self.dataOnTable.get(4).getText()).toEqual(elementAsRow.location+"l");

                //sign out from the page
                browser.actions().mouseMove(topNav.my).perform();
                browser.wait(EC.visibilityOf(topNav.signOut),6000);
                topNav.signOut.click();



            })



        })
    });
});