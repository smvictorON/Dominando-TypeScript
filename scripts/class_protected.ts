class Domicilio {
    public cor: string
    public endereco: object

    constructor(cor: string, endereco: object) {
        this.cor = cor
        this.endereco = endereco
    }

    public tocarInterfone(): string {
        return "Ding dong"
    }

    protected atenderInterfone(): string {
        return "Pois não?"
    }
}

class Casa extends Domicilio {

    public entrarNaCasa(): string {
        return this.atenderInterfone()
    }
}

const casa = new Casa("Rosa", {cidade: "Springfield"})

console.log(casa.tocarInterfone())
console.log(casa.entrarNaCasa())