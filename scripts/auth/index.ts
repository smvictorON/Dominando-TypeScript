namespace Autentication {
    interface IUser {
        email: string
        pass: string
    }

    interface IRegistration{
        name: string
        email: string
        pass: string
        bornDate: Date
    }

    export class LoginRegister {

        login(user: IUser){
            return user
        }

        register(newUser: IRegistration) {
            return newUser
        }

    }

    export class Recover{

        recoverPass(){
            return "sending email to recover pass"
        }

        recoverUsername(){
            return "sending email to recover username"
        }

    }
}