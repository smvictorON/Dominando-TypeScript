export function debug(classe: unknown) {
    console.log("Classe criada!", classe);
}

export function log(constructor: any){
    return class extends constructor{
        created_at: Date = new Date("2020-11-11")
    }
}
