const somarRenda = (...meses: number[]): number => {

    return meses.reduce((rendaTotal, rendaMes) => rendaTotal + rendaMes, 0)

}

console.log(somarRenda(10000, 3900, 2000))