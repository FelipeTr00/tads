// Para rodar o código, retire os comentários /* conteúdo */ 



// 2 Faça um algoritmo que leia nome, endereço e telefone de uma pessoa e apresente na tela:

/*
    const prompt = require("prompt-sync")();
    let nome = prompt("Infome o seu nome: ");
    let endereco = prompt("Seu endereço: ");
    let tel = prompt("Digite seu telefone: ");

    console.log("Confira as informações: "+"\n"+
    nome+"\n"+endereco+"\n"+tel);
*/

// 3 Ler três variáveis (a,b,c) e apresentar o resultado da seguinte fórmula: d=a+c-b, onde d também é uma variável. 

/*
    const prompt = require("prompt-sync")();
    let a = parseFloat(prompt("Informe o 1º número: "));
    let b = parseFloat(prompt("Informe o 2º número: "));
    let c = parseFloat(prompt("Informe o 3º número: "));
    let d = (a+b-c);

    console.log("O resultado para d=a+b-c, é: "+d)
*/

// 4 Leia 3 números e armazene em variáveis, depois calcule as operações abaixo contendo as 3 variáveis:

/*

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

*/

// 5 Faça um algoritmo que calcule e apresente a área de um triângulo. Sabe-se que área = (base * altura) / 2. Os valores da base e da altura devem ser informados pelo usuário. 

/*

    const prompt = require("prompt-sync")();
    let base = parseFloat(prompt("Informe a base do triângulo: "));
    let altura = parseFloat(prompt("Informe a altura do triângulo: "));
    console.log("A área do triângulo é:", (( base * altura ) / 2 )+".");

*/

// 6 Faça um algoritmo para que ao fornecer apenas o lado de um triângulo equilátero, seja calculada e retornada a área dessa figura.

/*
    const prompt = require("prompt-sync")();
    let medida = parseFloat(prompt("Informe uma medida do triângulo: "));


    let areaTriangulo = (((medida**2)*(3**(1/2)))/4);
    console.log("A área do triÂngulo equilátero é: "+areaTriangulo);

*/

// 7 Elabore um algoritmo que calcule e escreva a área de um círculo. Sabe-se que Área = π*R², onde R é o raio do círculo (lido) e π é o valor de PI (3,1415) declarado em uma constante.

/*
    const prompt = require("prompt-sync")();
    let R = prompt("Infome o Raio do circúlo: ");
    
    const pi = Math.PI;
    let circuloArea = (pi)*(R**2);
    let circuloDiametro = 2*R
    let circuloCircunferencia = (pi)*circuloDiametro

    console.log("Área: "+circuloArea);
    console.log("Diametro "+circuloDiametro);
    console.log("Circunferência: "+circuloCircunferencia);

*/
// 8 Faça um algoritmo que com um valor em segundos retorne à quantidade de horas, minutos e segundos equivalentes. Por exemplo, 6010 segundos são 1 hora, 40 minutos e 10 segundos.

/*
const prompt = require("prompt-sync")();
let segundos = prompt("Infome os segundos: ");

let horas = Math.floor((segundos/60)*1/60);
let minutos = Math.floor((segundos/60)-horas*60);
let segundosResto = segundos - 60*Math.floor(segundos/60);

console.log(
    "Segundos informados:" , segundos ,
    "\n", "Horas:" , horas ,
    "\n" , "Minutos:", minutos , 
    "\n", "Segundos:" , segundosResto
);
*/
// 18 Faça um algoritmo que apresente o quadrado e a raiz quadrada de um valor inteiro positivo que deve ser lido.
/*
    const prompt = require("prompt-sync")();

    let valor;

    do {valor = parseInt(prompt("Informe o valor de x (inteiro positivo): "));}
    while (isNaN(valor) || valor <= 0);

    let quadrado = valor**2;
    let raizquadrada = valor**(1/2);

    console.log("x² =", quadrado);
    console.log("√x =", raizquadrada.toFixed(4));

*/