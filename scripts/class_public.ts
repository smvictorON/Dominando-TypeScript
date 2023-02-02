class Veiculo {
    public cor: string

    constructor(cor: string){
        this.cor = cor
    }

    public tentarAbrir(): boolean{
        return false
    }
}

const carro = new Veiculo("branco")

carro.cor = "Preto"

console.log(carro.cor);
console.log(carro.tentarAbrir());

