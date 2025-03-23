// 5 Faça um algoritmo que calcule e apresente a área de um triângulo. Sabe-se que área = (base * altura) / 2. Os valores da base e da altura devem ser informados pelo usuário. 

    const prompt = require("prompt-sync")();
    
        let base = parseFloat(prompt("Informe a base do triângulo: "));
        let altura = parseFloat(prompt("Informe a altura do triângulo: "));
    
    let area = (( base * altura ) / 2 );

    console.log("A área do triângulo é: "+ area + ".");

