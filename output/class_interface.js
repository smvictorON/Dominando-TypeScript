"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`enviando email para: ${this.email}`);
        return true;
    }
}
class SMSV2 extends NotificacaoV2 {
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
        console.log(`enviando email para: ${this.numero}`);
        return true;
    }
}
const email = new EmailV2({
    nome: "Victor",
    email: "victorsm9@hotmail.com",
    telefone: "14998891700"
}).enviar();
const sms = new SMSV2({
    nome: "Victor",
    email: "victorsm9@hotmail.com",
    telefone: "14998891700"
}).enviar();
//# sourceMappingURL=class_interface.js.map