interface CadastroPadrao {
    readonly id: number
    readonly created_at: Date,
    readonly updated_at: Date
}

interface CadastroUsuario extends CadastroPadrao {
    nome: string
    email: string
    senha: string
}

interface CadastroCategoria extends CadastroPadrao {
    nome: string
}

class CadastroBasico<InterfaceBasica> {

    criar(dados: InterfaceBasica): InterfaceBasica{
        console.log("Criando novo Registro")
        console.log(dados)
        return dados
    }
    selecionar(id: number): InterfaceBasica{
        console.log(`Selecionado registro com id: ${id}`)
        return {} as InterfaceBasica
    }
    editar(id: number, dadosAtualizacao: InterfaceBasica): InterfaceBasica{
        console.log(`Editando registro com id: ${id}`)
        return dadosAtualizacao
    }
    excluir(id: number): boolean{
        console.log(`Excluindo registro com id: ${id}`)
        return true
    }
}

class UsuarioModelo extends CadastroBasico<CadastroUsuario>{}

const novoUsuario = new UsuarioModelo()

novoUsuario.criar({
    id: 1,
    nome: "victor",
    email: "victorsm9@hotmail.com",
    senha: "pass",
    created_at: new Date("2015-01-01"),
    updated_at: new Date("2015-01-01")
})

const novaCategoria = new CadastroBasico<CadastroCategoria>()

novaCategoria.criar({
    id: 1,
    nome: "JS",
    created_at: new Date("2016-01-01"),
    updated_at: new Date("2016-01-01")
})