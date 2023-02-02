class Documento {
    private valor: string = "123456789-0" // TS
    #numero: number = 20; // ECMA

    mostrarValor(){
        return this.#numero
    }

}

class CNPJ extends Documento {
    // private valor: string: "111111111-1"
    #numero: number = 50


    mostrarCNPJ(){
        return this.#numero
    }
}

const doc = new Documento()
const cnpj = new CNPJ()

console.log(doc.mostrarValor());
console.log(cnpj.mostrarCNPJ());

// console.log("DOC " + doc.valor);
// console.log("DOC " + doc.numero);
