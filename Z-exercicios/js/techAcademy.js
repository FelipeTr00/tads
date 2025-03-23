// 1 Faça um algoritmo para verificar se um número é par e divisível por 10.
/*
const prompt = require("prompt-sync")();
num = Number(prompt("Valor: "));

if (num % 2 == 0) {console.log("Par");}
else {console.log("Ímpar");}

if (num % 10 == 0) {console.log("Divisível por 10.");}
else {console.log("Não divisível por 10.");}

*/

// 2 Faça um algoritmo para verificar se um número é divisível por 7 ou por 23.
/*
const prompt = require("prompt-sync")();
let num = Number(prompt("Valor: "));
if (num % 7 == 0 || num % 23 == 0){
    console.log("É divisível por 7 ou 23.");}
else {console.log("Não é divisível por 7 ou 23");};
*/
// 3 Escreva um programa para ler 5 valores inteiros, escrever o maior deles e apresentar a posição de ordem em qual ele foi digitado (se ele foi digitado por primeiro ou por segundo ou...)
/*
const prompt = require("prompt-sync")();
    const numA = parseInt(Number(prompt("Primeiro número: ")));
    const numB = parseInt(Number(prompt("Segundo número: ")));
    const numC = parseInt(Number(prompt("Terceiro número: ")));
    const numD = parseInt(Number(prompt("Quarto número: ")));
    const numE = parseInt(Number(prompt("Quinto número: ")));
let maior = Math.max(numA,numB, numC, numD, numE)
    console.log(maior);
if (maior == numA){console.log("Primeiro número");};
if (maior == numB){console.log("Segundo número");};
if (maior == numC){console.log("Terceiro número");};
if (maior == numD){console.log("Quarto número");};
if (maior == numE){console.log("Quinto número");};
*/

// 4 Faça um algoritmo que recebe o nome de uma pessoa, a altura (em metros) e o peso (em Kg), calcule o peso ideal (fórmulas abaixo) e apresente o nome e a faixa que a pessoa se encontra - Fórmula PESO/(ALTURA*ALTURA)
/*
const prompt = require("prompt-sync")();
const nome = prompt("Digite seu nome: ");
const altura = Number(prompt("Sua altura (em mtrs): "));
const peso = Number(prompt("Seu peso (em Kg):"));
    let imc = (peso / (altura**2)).toFixed(2);
    if(imc <= 18.5) {faixa = "abaixo do peso."};
    if(imc <= 24.9) {faixa = "no peso normal."};
    if(imc <= 29.9) {faixa = "com sobrepeso."};
    if(imc > 29.9) {faixa = "com obesidade."};
console.log(nome+" você está "+faixa+". Obs.: índice = "+imc+".");
*/
// 5 Um triângulo que todos os lados têm a mesma medida é chamado de equilátero, se dois lados têm a mesma medida é chamado de isósceles e com lados de medidas diferentes é chamado de escaleno. Faça um algoritmo que analise os lados de qualquer triângulo e retorne à classificação.
/*
const prompt = require("prompt-sync")();
const ladoA = Number(prompt("Lado A do triângulo: "));
const ladoB = Number(prompt("Lado B do triângulo: "));
const ladoC = Number(prompt("Lado C do triângulo: "));

let tipo;

switch (true) {
    case ladoA == ladoB && ladoB == ladoC:
    tipo = "Equilátero"
    break

    case ladoA == ladoB || ladoA == ladoC || ladoB == ladoC:
    tipo = "Isósceles"
    break

    default:
    tipo = "Escaleno"
}

console.log("O tipo do triÂngulo é:",tipo+".");
*/
// 6 O governo do estado autorizou um aumento de salário para os funcionários públicos. Para tentar aproximar os valores pagos, o aumento depende do valor do salário atual. Para funcionários que ganham até R$ 1320 o aumento será de 11%, para funcionários que ganham entre R$ 1320 e R$ 3000 o aumento será de 9%, para funcionários que ganham entre R$ 3000 e R$ 7000, o aumento será de 6%, e finalmente, para os funcionários que ganham mais que R$ 7000, aumento de 1%. Faça um algoritmo que calcule o novo salário a partir do salário atual.
/*
const prompt = require("prompt-sync")();
let salario = Number(prompt("Informe o salário: "))
let salarioNovo;
switch(true) {
    case salario > 7000:
    salarioNovo = salario * (1 + 1/100)
    break
    case salario > 3000:
    salarioNovo = salario * (1 + 6/100)
    break
    case salario > 1320:
    salarioNovo = salario * (1 + 9/100)
    break
    default:
    salarioNovo = salario * (1 + 11/100)
}
console.log("O salario atualizado é: "+salarioNovo.toFixed(2)+".");
*/

// 7 Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
/*
const prompt = require("prompt-sync")();
let a = parseInt(prompt("Primeiro valor: "));
let b = parseInt(prompt("Segundo valor: "));
let c = parseInt(prompt("Terceiro valor: "));

let primeiro = Math.min(a,b,c)
let terceiro = Math.max(a,b,c)
let segundo = (a + b + c) - (primeiro + terceiro);

console.log("Valores em ordem crescente:");
console.log(primeiro);
console.log(segundo);
console.log(terceiro);
*/

// 8 Faça um algoritmo que ajude o professor a calcular as notas dos alunos de TADS. Sabendo que são informadas 4 notas, Prova1, Prova2, Trabalho1 e Trabalho2. Realize o cálculo da Média desses 4 valores e depois apresente a situação do aluno de acordo com o seguinte critério:
//média >= 7.0, aprovado;
//média entre 4.0 e 6.99, recuperação;
//média < 4.0, reprovado.
/*
const prompt = require("prompt-sync")();
let prova1 = Number(prompt("Nota da prova 1: "));
let prova2 = Number(prompt("Nota da prova 2: "));
let trab1 = Number(prompt("Nota do trabalho 1: "));
let trab2 = Number(prompt("Nota do trabalho 2: "));

let media = (prova1+prova2+trab1+trab2)/4
console.log(media.toFixed(2));

if (media >= 7.0) {
    console.log("Aprovado, media:",media);
} else if (media >= 4.0 && media < 7.0) {
    console.log("Recuperação, média",media);
} else {
    console.log("Reprovado, média:",media);
}
*/
// 9 Faça um algoritmo que receba um valor numérico representando um ano (por exemplo, 1890) e verifique se o ano é ou não bissexto. Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.
/*
const prompt =  require("prompt-sync")();
let ano = prompt("Informe o ano:");
if ((ano % 400 == 0) || (ano % 4 == 0 && (ano % 100 != 0)))  {
    console.log("Bissexto");
}   else {
    console.log("Não-bissexto");
}
*/

// 10 Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A senha válida é o número 5479. Devem ser impressas as seguintes mensagens:
// ACESSO PERMITIDO caso a senha seja válida.
// ACESSO NEGADO caso a senha seja inválida.
/*
const prompt = require("prompt-sync")();
const passwd = 5479
let senha = prompt.hide("Senha:");
if (senha == passwd) {
    console.log("ACESSO PERMITIDO");
}   else {
    console.log("ACESSO NEGADO");
}
*/
// 11 Um banco emprega diferentes taxas de correção (anual) para um investimento dependendo do valor aplicado. Para valores até R$ 2000 (inclusive) a taxa de correção é de 10%, para valores entre R$ 2000 e R$ 5000 (inclusive) a taxa de correção é de 12%, para valores maiores que R$ 5000 a taxa de correção é de 13%. Faça um algoritmo que indique a taxa de correção para um dado valor aplicado.
/*
const prompt = require("prompt-sync")();
let valor = Number(prompt("Informe o valor:"));
switch (true) {
    case valor > 5000:
        prompt("A taxa de correção será: 13%.")
        break
    case valor > 2000:
        prompt("A taxa de correção será: 12%.")
        break
    default:
        prompt("A taxa de correção será: 10%.")
}
*/
// 12 Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte:
// Se o número de lados for igual a 3 escrever TRI NGULO e o valor da área
// Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
// Se o número de lados for igual a 5 escrever PENTÁGONO.
// Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO.
// Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO MAPEADO
/*
const prompt = require("prompt-sync")();
let lados = Number(prompt("Qtd. de lados:"));
let tmnho = Number(prompt("Tamanho (em cm):"));

switch (true) {
    case (lados == 3):
    let area = (tmnho**2) * 3**(1/2) / 4
    console.log("Triângilo, de área:",area.toFixed(2),"cm.")
    break;
    case (lados == 4):
    let area2 = tmnho**2
    console.log("Quadrado, de área:",area2.toFixed(2),"cm.")
    break;
    case (lados == 5):
    console.log("Pentagono.");
    break;
    case (lados > 5):
    console.log("Polígono não mapeado.")
    break;
    default:
    console.log("Não é um polígono.")
    break;
}
*/
// 13 Um triângulo que todos os lados têm a mesma medida é chamado de equilátero, se dois lados têm a mesma medida é chamado de isósceles e com lados de medidas diferentes é chamado de escaleno. Faça um algoritmo que analise os lados de qualquer triângulo e retorne à classificação.
/*
const prompt = require("prompt-sync")();
let a = prompt("Triângilo, lado (a):")
let b = prompt("Triângilo, lado (b):")
let c = prompt("Triângilo, lado (c):")

switch (true) {
    case a == b && b == c:
        prompt("TriÂngilo equilátero.")
        break;
    case a == b || a == c || b == c:
        prompt("Triângulo isóceles.")
        break;
    default:
        prompt("Triângulo escaleno.")
        break;
}

*/
// 14 Faça um algoritmo que receba 3 valores de uma data (dia, mês e ano) e retorne se a data é válida ou não é válida. 29/02/2022 inválida, 32/07/1980 inválida, 31/12/2000 válida

const prompt = require("prompt-sync")();
let data = Date.parse(prompt("Informe a data:"));
console.log("Data válida:", data);

// 15 As Laranjas custam R$ 0,40 cada se forem compradas menos do que uma dúzia, e R$ 0,28 se forem compradas pelo menos doze. Escreva um programa que leia o número de Laranjas compradas, calcule e escreva o valor total da compra.

// 16 Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
// Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
// Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
// Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
//Caso os ângulos informados não correspondam as alternativas, apresentar 	que os ângulos são inválidos.

// 17 Faça um algoritmo que receba um valor numérico e retorne o mês correspondente por extenso. Caso não exista o mês, retorne a mensagem "mês inválido!".

// 18 Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

// 19 (Condicional). Faça um algoritmo que ajude o professor a calcular as notas dos alunos de TADS. Sabendo que são informadas 6 notas: Prova1, Prova2, Trabalho1, Trabalho2, Trabalho3 e Trabalho 4. Todas as provas e trabalhos valem 10. Realize o cálculo da Média dos valores das provas que equivale a 50% da nota final e o cálculo dos 4 trabalhos que equivalem aos outros 50%. Depois defina a média final dos valores, tendo como resposta as seguintes situações:
// média final >= 7.0, cout<<aprovado;
// média final entre 4.0 e 6.99, cout<<recuperação;
// média final < 4.0, cout<<reprovado.

