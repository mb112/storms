describe('bookit', () => {

    it('login the website (Hard Coded)', () => {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/sign-in");
        browser.sleep(1000)
        $("[name='email']").sendKeys("efewtrell8c@craigslist.org")
        browser.sleep(1000)
        $("[name='password']").sendKeys("jamesmay")
        element(by.buttonText("sign in")).click()
        browser.sleep(2000)
        expect($(".title").getText()).toEqual("VA")
    });
    
});