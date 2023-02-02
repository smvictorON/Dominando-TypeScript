"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function decorarMethod(target, propertyKey, descriptor) {
    // console.log({
    //     target,
    //     propertyKey,
    //     descriptor
    // });
    descriptor.value = (...args) => {
        return args.map(item => {
            return item.toUpperCase();
        });
    };
}
class TratarMensagem {
    dizerMensagem(...mensagens) {
        return mensagens;
    }
}
__decorate([
    decorarMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TratarMensagem.prototype, "dizerMensagem", null);
const instacia = new TratarMensagem;
console.log(instacia.dizerMensagem("ola", "senha bem vindo", "hcode"));
//# sourceMappingURL=decorator_methods.js.map