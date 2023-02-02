"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applymixins_1 = __importDefault(require("./applymixins"));
class ProdutoFinal {
    vender(quantidade) {
        return `Foram vendidos ${quantidade} produtos`;
    }
    comprar(quantidade) {
        return `Foram comprados ${quantidade} produtos`;
    }
}
class Movel {
    sentar() {
        return "Voce sentou no movel";
    }
    empurrar(metros) {
        return `O movel foi empurrado ${metros} metros`;
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applymixins_1.default)(Sofa, [ProdutoFinal, Movel]);
const prod = new Sofa("três lugares");
console.log(prod.vender(2));
console.log(prod.sentar());
console.log(prod.nome);
//# sourceMappingURL=index.js.map