import Notificacao from "./Notificacao";
import IMeuUsuario from "../interfaces/IMeuUsuario";

export class Email extends Notificacao {

    enviar(usuario: IMeuUsuario): boolean {

        console.log(`enviando email para: ${usuario.email}`);

        return true

    }
}

export class SMS extends Notificacao {

    enviar(usuario: IMeuUsuario): boolean {

        console.log(`enviando sms para: ${usuario.telefone}`);

        return true
    }
}