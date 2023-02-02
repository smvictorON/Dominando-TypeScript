class Produto {

    nome: string
    valor: number

    constructor(produtoNome: string, produtoValor: number){
        this.nome = produtoNome,
        this.valor = produtoValor
    }

}

const ps5 = new Produto("PS5", 5000)

const elemento = document.querySelector("div")