class Permissao {
    constructor(private _nome: string, private _nivel: number){}

    get nome() { return this._nome.toUpperCase() }
    get nivel() { return this._nivel }
    set nome(nome) {
        if(nome.length < 5)
            throw new Error("Nome Invalido")
        this._nome = nome
    }

    set nivel(nivel) {
        console.log('novo nivel setado!');
        this._nivel = nivel
    }
}

const permissao = new Permissao("Adm", 1)

console.log(permissao.nome);

try {
    permissao.nome = "Emp"
} catch (e: any) {
    console.log(e.message)
}

permissao.nivel = 2


