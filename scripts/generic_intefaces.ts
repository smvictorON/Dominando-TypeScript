interface IProcessamento<TipoInterface> {
    valor: TipoInterface
    realizarProcessamento(arg: TipoInterface): TipoInterface;
}

const texto: IProcessamento<string> = {
    valor: "victor",
    realizarProcessamento(arg: string): string {
        return  arg.toUpperCase();
    }
}

const numerico : IProcessamento<number> = {
    valor: 10,
    realizarProcessamento(arg: number): number {
        return  arg*arg;
    }
}

console.log(texto.valor);
console.log(texto.realizarProcessamento("Victor"));

console.log(numerico.valor);
console.log(numerico.realizarProcessamento(5));
