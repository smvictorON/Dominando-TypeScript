import { Email, SMS } from "./classes/NotifTypes"

new Email().enviar({email: "victorsm9@hotmail.com"})
new SMS().enviar({telefone: "14998891700"})