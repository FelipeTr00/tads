// 7 Elabore um algoritmo que calcule e escreva a área de um círculo. Sabe-se que Área = π*R², onde R é o raio do círculo (lido) e π é o valor de PI (3,1415) declarado em uma constante.


    const prompt = require("prompt-sync")();
    let R = prompt("Infome o Raio do circúlo: ");
    
    const pi = Math.PI;
    let circuloArea = (pi)*(R**2);
    let circuloDiametro = 2*R
    let circuloCircunferencia = (pi)*circuloDiametro

    console.log("Área: "+circuloArea);
    console.log("Diametro "+circuloDiametro);
    console.log("Circunferência: "+circuloCircunferencia);

