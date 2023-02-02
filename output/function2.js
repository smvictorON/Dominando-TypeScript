"use strict";
const enviarEmail = (para, assunto = "Sem assunto", remetente) => {
    console.log({
        para,
        assunto,
        remetente
    });
};
enviarEmail("victorsm9@hotmail.com");
enviarEmail("victorsm9@hotmail.com", "holerite");
enviarEmail("victorsm9@hotmail.com", "holerite", "victorm@crewhu.com");
//# sourceMappingURL=function2.js.map