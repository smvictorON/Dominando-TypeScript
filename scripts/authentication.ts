/// <reference path="./auth/index.ts"/>

const newRegister = new Autentication.LoginRegister()

const res = newRegister.register({
    name: "Victor",
    email: "victorsm9@hotmail.com",
    pass: "abc12",
    bornDate: new Date("1995-01-17")
})

console.log(res);
