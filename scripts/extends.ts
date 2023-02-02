interface IUsuario {
    nome: string
    email: string
    senha?: string
    id: number
}

interface IPessoa extends IUsuario {
    idade: number
}

const alguem: IPessoa = {
    nome: "Victor",
    idade: 27,
    id: 41356048,
    email:"victorsm9@hotmail.com",
}