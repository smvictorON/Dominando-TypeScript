"use strict";
const produtoDados = {
    nome: "Notebook",
    preco: 5000,
    descricao: "notebook de ultima geraçao",
    dataValidade: new Date(2022, 11, 1)
};
let primeSum;
primeSum = (numero1, numero2) => {
    return numero1 + numero2;
};
let calculadora;
const multiplicacao = (a, b) => {
    return a * b;
};
const dividir = (a, b) => a / b;
calculadora = {
    somar: (a, b) => {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicar: multiplicacao,
    dividir // atribuindo uma function de mesmo nome pode ficar implicito a atribuição
};
//# sourceMappingURL=interface2.js.map