// 6 Faça um algoritmo para que ao fornecer apenas o lado de um triângulo equilátero, seja calculada e retornada a área dessa figura.

    const prompt = require("prompt-sync")();

    let medida = parseFloat(prompt("Informe uma medida do triângulo: "));

    let areaTriangulo = (((medida**2)*(3**(1/2)))/4);

    console.log("A área do triÂngulo equilátero é: "+areaTriangulo);

