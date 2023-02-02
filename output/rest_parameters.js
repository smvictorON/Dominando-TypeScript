"use strict";
const somarRenda = (...meses) => {
    return meses.reduce((rendaTotal, rendaMes) => rendaTotal + rendaMes, 0);
};
console.log(somarRenda(10000, 3900, 2000));
//# sourceMappingURL=rest_parameters.js.map