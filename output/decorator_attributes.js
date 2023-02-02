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
function decoratorAttr(target, nomePropriedade) {
    const novoNome = `_${nomePropriedade}`;
    Object.defineProperty(target, nomePropriedade, {
        get() {
            return this[novoNome].toUpperCase();
        },
        set(novoValor) {
            this[novoNome] = novoValor.split('').reverse().join('');
        }
    });
}
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}
__decorate([
    decoratorAttr,
    __metadata("design:type", String)
], Animal.prototype, "nome", void 0);
const cachorro = new Animal("Pluto");
console.log(cachorro.nome);
//# sourceMappingURL=decorator_attributes.js.map