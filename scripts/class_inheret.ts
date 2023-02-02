class Cadastro {
    nome: string
    nascimento: Date

    constructor(nome: string, nascimento: Date){
        this.nome = nome
        this.nascimento = nascimento
    }
}

class Cliente extends Cadastro {
    email: string
    empresa: string

    constructor(nome: string, nascimento: Date, email: string, empresa: string){
        super(nome, nascimento)
        this.email = email
        this.empresa = empresa
    }
}

const clienteVictor = new Cliente("Victor", new Date("1995-01-17"), "victorsm9hotmail.com", "crewhu")

console.log(clienteVictor);
