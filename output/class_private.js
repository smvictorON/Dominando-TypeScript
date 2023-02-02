"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000;
    }
    debitarCofre(qtd) {
        if (this.cofreQtd >= qtd) {
            this.cofreQtd -= qtd;
            return this.cofreQtd;
        }
        else {
            return "O cofre não possui a quantidade requisitada!";
        }
    }
    sacarDoCaixa(qtd) {
        return this.debitarCofre(qtd);
    }
    sacarDoCaixaEletronico(qtd) {
        return this.debitarCofre(qtd);
    }
}
class Banco24hrs extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco24hrs();
console.log(nubank.sacar(50000));
//# sourceMappingURL=class_private.js.map