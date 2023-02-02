class Pessoa {
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade:number, altura: number){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    toString(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura}`
    }
}

const ronaldo = new Pessoa("Ronaldo", 20, 1.60)
const marcus = new Pessoa("Marcus", 30, 1.80)

ronaldo.nome = "Ronaldo S"

console.log(ronaldo.toString());
console.log("" + marcus);
