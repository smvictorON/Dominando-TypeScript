"use strict";
class Empresa {
    prestarServico() {
        return "Empresa prestando serviço";
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return "Vendendo pão";
    }
}
const emp = new Empresa();
const padaria = new Padaria();
console.log(emp.prestarServico());
console.log(padaria.prestarServico());
//# sourceMappingURL=class_polimorf.js.map