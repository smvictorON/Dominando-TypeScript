"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
        return notasTotal / notas.length;
    }
}
const glaucio = new Professor("Glaucio", 40, "DBA");
console.log(glaucio.seApresentar());
const joao = new Professor("Joao", 25, "TS");
console.log(joao.dizerNotas(2, 2, 2, 8, 8, 8));
//# sourceMappingURL=class_method.js.map