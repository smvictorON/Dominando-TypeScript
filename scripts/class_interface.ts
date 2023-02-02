interface IEmailV2{
    nome: string
    email: string
}

interface ITelefoneV2{
    numero: string
}

interface INotificacaoV2{
    enviar(meuUsuarioV2: IMeuUsuarioV2): boolean
}

interface IMeuUsuarioV2{
    nome: string,
    email: string,
    telefone: string,
}

abstract class NotificacaoV2 {

    abstract enviar(): boolean;

}

class EmailV2 extends NotificacaoV2 implements INotificacaoV2, IEmailV2 {

    nome: string;
    email: string;

    constructor(usuario: IMeuUsuarioV2){
        super();
        this.nome = usuario.nome
        this.email = usuario.email
    }

    enviar(): boolean {

        console.log(`enviando email para: ${this.email}`);

        return true

    }
}

class SMSV2 extends NotificacaoV2 implements INotificacaoV2, ITelefoneV2 {
    numero: string;

    constructor(usuario: IMeuUsuarioV2){
        super()
        this.numero = usuario.telefone
    }

    enviar(): boolean {

        console.log(`enviando email para: ${this.numero}`);

        return true
    }
}

const email = new EmailV2({
    nome: "Victor",
    email: "victorsm9@hotmail.com",
    telefone: "14998891700"
}).enviar()

const sms = new SMSV2({
    nome: "Victor",
    email: "victorsm9@hotmail.com",
    telefone: "14998891700"
}).enviar()