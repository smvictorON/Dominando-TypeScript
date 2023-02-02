"use strict";
var Autentication;
(function (Autentication) {
    class LoginRegister {
        login(user) {
            return user;
        }
        register(newUser) {
            return newUser;
        }
    }
    Autentication.LoginRegister = LoginRegister;
    class Recover {
        recoverPass() {
            return "sending email to recover pass";
        }
        recoverUsername() {
            return "sending email to recover username";
        }
    }
    Autentication.Recover = Recover;
})(Autentication || (Autentication = {}));
//# sourceMappingURL=index.js.map