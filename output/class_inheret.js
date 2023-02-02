"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const clienteVictor = new Cliente("Victor", new Date("1995-01-17"), "victorsm9hotmail.com", "crewhu");
console.log(clienteVictor);
//# sourceMappingURL=class_inheret.js.map