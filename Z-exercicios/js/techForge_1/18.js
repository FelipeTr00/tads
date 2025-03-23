// 18 Faça um algoritmo que apresente o quadrado e a raiz quadrada de um valor inteiro positivo que deve ser lido.

    const prompt = require("prompt-sync")();

        let valor;

    do {valor = parseInt(prompt("Informe o valor de x (inteiro positivo): "));}
    while (isNaN(valor) || valor <= 0);

        let quadrado = valor**2;
        let raizquadrada = valor**(1/2);

    console.log("x² =", quadrado);
    console.log("√x =", raizquadrada.toFixed(4));
