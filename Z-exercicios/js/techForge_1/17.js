// 17 Faça um algoritmo para calcular rendimentos. As variáveis de entrada devem ser o valor a ser aplicado e o percentual de lucro.

const prompt = require("prompt-sync")();

    let valor = Number(prompt("Valor aplicado: "));
    let perc = Number(prompt("Percentual do rendimento: "));

    let percent = perc / 100;
    let lucro = (valor * percent).toFixed(2); 

console.log("O valor do rendimento é:", lucro);

console.log("O montante final é:", Number(valor) + Number(lucro));