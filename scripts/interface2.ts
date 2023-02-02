interface IProduto {
    readonly nome: string,
    preco: number,
    descricao?: string
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 5000,
    descricao: "notebook de ultima geraçao",
    dataValidade: new Date(2022, 11, 1)

}

// produtoDados.nome = "Celular"

// console.log(produtoDados);

interface ISoma {
    (num1: number, num2: number): number
}

let primeSum: ISoma

primeSum = (numero1, numero2) => {
    return numero1 + numero2
}

interface ICalculos {
    somar(a: number, b: number): number,
    subtrair(a: number, b: number): number,
    multiplicar(a: number, b: number): number,
    dividir(a: number, b: number): number,
}

let calculadora: ICalculos

const multiplicacao = (a: number, b: number): number => {
    return a * b
}

const dividir = (a: number, b: number): number => a / b

calculadora = {
    somar: (a: number, b: number): number => {
        return a + b
    }, // definindo com arrow function
    subtrair: function (a, b) {
        return a - b
    }, // definindo com function padrao
    multiplicar: multiplicacao, // atribuindo uma function diferente com mesma assinatura
    dividir // atribuindo uma function de mesmo nome pode ficar implicito a atribuição
}