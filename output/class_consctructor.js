"use strict";
class Pedido {
    constructor(produto, valor, previsaoEntrega) {
        this.produto = produto;
        this.valor = valor;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("TV", 3000, new Date("2022-02-20"));
console.log(meuPedido);
//# sourceMappingURL=class_consctructor.js.map