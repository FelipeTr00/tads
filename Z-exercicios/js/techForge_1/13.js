// 13 Faça um algoritmo para entrar com o saldo de uma aplicação bancária e o resultado deve ser o rendimento de 11% do valor aplicado.

const prompt = require("prompt-sync")();

    let investimento = prompt("Qual valor deseja investir? ");

    let rendimento = investimento * 0.11
    let montante = parseFloat(investimento) + parseFloat(rendimento);

console.log(
    
"Investindo "+ investimento +
" ao final do período, receberá de rendimentos "+ rendimento + ", totalizando "
+ montante + ", ao final do período."

);