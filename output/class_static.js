"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("./classes/BancoDeDados");
const conex = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_SQLSERVER,
    senha: "senha",
    usuario: "victor",
    ip: BancoDeDados_1.BancoDeDados.LOCAL
});
console.log(conex);
//# sourceMappingURL=class_static.js.map