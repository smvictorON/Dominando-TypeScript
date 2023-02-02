import applyMixins from "./applymixins"

class ProdutoFinal {

    vender(quantidade: number){
        return `Foram vendidos ${quantidade} produtos`
    }

    comprar(quantidade: number){
        return `Foram comprados ${quantidade} produtos`
    }
}

class Movel {

    sentar(){
        return "Voce sentou no movel"
    }

    empurrar(metros: number){
        return `O movel foi empurrado ${metros} metros`
    }
}

class Sofa {
    constructor(public nome: string){}
}

interface Sofa extends ProdutoFinal, Movel{}
applyMixins(Sofa, [ProdutoFinal, Movel])

const prod = new Sofa("três lugares")

console.log(prod.vender(2))
console.log(prod.sentar())
console.log(prod.nome)