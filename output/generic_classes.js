"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("Criando novo Registro");
        console.log(dados);
        return dados;
    }
    selecionar(id) {
        console.log(`Selecionado registro com id: ${id}`);
        return {};
    }
    editar(id, dadosAtualizacao) {
        console.log(`Editando registro com id: ${id}`);
        return dadosAtualizacao;
    }
    excluir(id) {
        console.log(`Excluindo registro com id: ${id}`);
        return true;
    }
}
class UsuarioModelo extends CadastroBasico {
}
const novoUsuario = new UsuarioModelo();
novoUsuario.criar({
    id: 1,
    nome: "victor",
    email: "victorsm9@hotmail.com",
    senha: "pass",
    created_at: new Date("2015-01-01"),
    updated_at: new Date("2015-01-01")
});
const novaCategoria = new CadastroBasico();
novaCategoria.criar({
    id: 1,
    nome: "JS",
    created_at: new Date("2016-01-01"),
    updated_at: new Date("2016-01-01")
});
//# sourceMappingURL=generic_classes.js.map