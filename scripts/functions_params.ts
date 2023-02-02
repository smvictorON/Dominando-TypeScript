const enviarEmail = (para: string, assunto: string = "Sem assunto", remetente?: string): void => {

    console.log({
        para,
        assunto,
        remetente
    });


}

enviarEmail("victorsm9@hotmail.com")
enviarEmail("victorsm9@hotmail.com", "holerite")
enviarEmail("victorsm9@hotmail.com", "holerite", "victorm@crewhu.com")