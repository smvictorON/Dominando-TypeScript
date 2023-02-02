class Empresa {
    prestarServico(): string {
        return "Empresa prestando serviço"
    }
}

class Padaria extends Empresa {
    prestarServico(): string {
        return "Vendendo pão"
    }
}

const emp = new Empresa()
const padaria = new Padaria()

console.log(emp.prestarServico());
console.log(padaria.prestarServico());
