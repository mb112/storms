var HomePage = function(){

    this.email          = $('[name="email"]');
    this.password       = $('[name="password"]');
    this.signinButton   = element(by.buttonText("sign in"));
    this.title          = $("app-hero-body .title")

}

module.exports = new HomePage();