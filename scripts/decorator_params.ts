import "reflect-metadata"

function decoratorParams(target: any, key: string, propertyKey: number){
    return Reflect.getMetadata('design:paramtypes', target, key).map(item => console.log(item))
}

class TratarParametros {

    metodo1(@decoratorParams mensagem: string){

    }

    metodo2(@decoratorParams numero: number){

    }
}

new TratarParametros()