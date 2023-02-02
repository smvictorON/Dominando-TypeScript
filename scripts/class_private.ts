class Banco {
    private cofreQtd: number = 10000;

    private debitarCofre(qtd: number): number | string {
        if (this.cofreQtd >= qtd){
            this.cofreQtd -= qtd;
            return this.cofreQtd
        }else{
            return "O cofre não possui a quantidade requisitada!"
        }
    }

    protected sacarDoCaixa(qtd: number){
        return this.debitarCofre(qtd)
    }

    public sacarDoCaixaEletronico(qtd: number){
        return this.debitarCofre(qtd)
    }
}

class Banco24hrs extends Banco {
    public sacar(qtd: number){
        return this.sacarDoCaixa(qtd)
    }
}

const nubank = new Banco24hrs()

console.log(nubank.sacar(50000))