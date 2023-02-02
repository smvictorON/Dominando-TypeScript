"use strict";
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrir() {
        return false;
    }
}
const carro = new Veiculo("branco");
carro.cor = "Preto";
console.log(carro.cor);
console.log(carro.tentarAbrir());
//# sourceMappingURL=class_public.js.map