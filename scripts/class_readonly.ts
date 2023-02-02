class Usuario {
    readonly id: string = "123123123"
    nome: string = "Victor"
    private senha: string = "abc123"
    readonly dataCadastro: Date = new Date("2020-01-01")
}

const user = new Usuario()

// user.id = "00000"

console.log(user);
