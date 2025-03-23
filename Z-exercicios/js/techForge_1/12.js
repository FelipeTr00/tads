// 12 Faça um algoritmo para inverter um único valor numérico composto por centena, dezena e unidade. Por exemplo, se o número for 123, o resultado será 321.

const prompt = require("prompt-sync")();

    let num = prompt("Informe os três dígitos: ");

    let a = Math.floor(num/100).toString();
    let b = Math.floor((num/10)-10*a ).toString();
    let c = Math.floor(num - ((100*a)+(10*b))).toString();
    let cba = (c+b+a)

console.log("O valor reverso é:",cba+".");
