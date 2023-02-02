function decorarMethod(target: unknown, propertyKey: string, descriptor: PropertyDescriptor){
    // console.log({
    //     target,
    //     propertyKey,
    //     descriptor
    // });

    descriptor.value = (...args: unknown[]) => {
        return args.map(item => {
            return (<string>item).toUpperCase();
        })
    }


}

class TratarMensagem {
    @decorarMethod
    dizerMensagem(...mensagens: string[]){
        return mensagens
    }
}

const instacia = new TratarMensagem

console.log(instacia.dizerMensagem("ola", "senha bem vindo", "hcode"))