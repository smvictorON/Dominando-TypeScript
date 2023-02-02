interface ICategoria {
    nome: string
    id: number
    categoriaPai?: ICategoria
}

const frontend: ICategoria = {
    nome: "Front-end",
    id: 1
}

const backend: ICategoria = {
    nome: "Back-end",
    id: 2
}

interface IMenu {
    categorias: ICategoria[]
}

let menu: IMenu = {
    categorias: [frontend, backend]
}

interface ITodo {
    [indice: number]: string; // declaração de um array na interface, definindo o indice do array e o valor que vai receber nas posições
}

let minhasTarefas: ITodo = [
    "estudar",
    "dormir",
    "comer",
    "sair"
]

console.log(minhasTarefas[2]);
