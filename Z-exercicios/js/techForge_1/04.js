// 4 Leia 3 números e armazene em variáveis, depois calcule as operações abaixo contendo as 3 variáveis:



    const prompt = require("prompt-sync")();
    let num1 = parseFloat(prompt("Informe o 1º número: "));
    let num2 = parseFloat(prompt("Informe o 2º número: "));
    let num3 = parseFloat(prompt("Informe o 3º número: "));

// a) soma
    console.log("Soma: ",num1 + num2 + num3);
// b) subtração
    console.log("Subtração: ",num1 - num2 - num3);

// c) multiplicação
    console.log("Produto: ",num1 * num2 * num3);

// d) divisão
    console.log("Quociente: ",num1 / num2 / num3);

