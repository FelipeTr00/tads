// 3 Ler três variáveis (a,b,c) e apresentar o resultado da seguinte fórmula: d=a+c-b, onde d também é uma variável. 


    const prompt = require("prompt-sync")();
   
        let a = parseFloat(prompt("Informe o 1º número: "));
        let b = parseFloat(prompt("Informe o 2º número: "));
        let c = parseFloat(prompt("Informe o 3º número: "));
    
    let d = (a+b-c);

    console.log("O resultado para d=a+b-c, é: "+d)