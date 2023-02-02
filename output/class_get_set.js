"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() { return this._nome.toUpperCase(); }
    get nivel() { return this._nivel; }
    set nome(nome) {
        if (nome.length < 5)
            throw new Error("Nome Invalido");
        this._nome = nome;
    }
    set nivel(nivel) {
        console.log('novo nivel setado!');
        this._nivel = nivel;
    }
}
const permissao = new Permissao("Adm", 1);
console.log(permissao.nome);
try {
    permissao.nome = "Emp";
}
catch (e) {
    console.log(e.message);
}
permissao.nivel = 2;
//# sourceMappingURL=class_get_set.js.map