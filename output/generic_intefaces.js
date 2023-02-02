"use strict";
const texto = {
    valor: "victor",
    realizarProcessamento(arg) {
        return arg.toUpperCase();
    }
};
const numerico = {
    valor: 10,
    realizarProcessamento(arg) {
        return arg * arg;
    }
};
console.log(texto.valor);
console.log(texto.realizarProcessamento("Victor"));
console.log(numerico.valor);
console.log(numerico.realizarProcessamento(5));
//# sourceMappingURL=generic_intefaces.js.map