class Pedido {
    constructor(public produto: string, public valor: number, public previsaoEntrega: Date) {}
}

const meuPedido = new Pedido ("TV", 3000, new Date("2022-02-20"))

console.log(meuPedido);
