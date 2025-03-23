// 9 Antes de o racionamento de energia ser decretado, quase ninguém falava em quilowatts, mas agora todos incorporaram essa palavra em seu vocabulário. Sabendo-se que 300 quilowatts de energia custam um sexto do salário-mínimo, faça um cálculo que recebendo o valor do salário-mínimo e a quantidade de quilowatts gastas por uma residência, calcule o valor em reais a ser pago.

const prompt = require("prompt-sync")();

    let sm = prompt("Informe o Salário Mínimo: ");
    let qtdQuilowatts = prompt("Informe a quantidade de Quilowatts consumidos: ")

const vlQuilowatts = (sm / 300)*1/6
    fatura = (vlQuilowatts * qtdQuilowatts).toFixed(2)

console.log("O valor a ser pago é: R$ "+fatura+".");