import { BancoDeDados } from './classes/BancoDeDados'

const conex = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_SQLSERVER,
    senha: "senha",
    usuario: "victor",
    ip: BancoDeDados.LOCAL
})

console.log(conex);
