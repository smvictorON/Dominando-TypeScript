"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return "Ding dong";
    }
    atenderInterfone() {
        return "Pois não?";
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone();
    }
}
const casa = new Casa("Rosa", { cidade: "Springfield" });
console.log(casa.tocarInterfone());
console.log(casa.entrarNaCasa());
//# sourceMappingURL=class_protected.js.map