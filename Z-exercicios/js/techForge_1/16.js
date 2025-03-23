// 16 Faça um algoritmo que com três valores que correspondem a um horário, por exemplo, 1 hora, 40 minutos e 10 segundos, apresente o valor em segundos. Neste exemplo, o retorno é 6010 segundos.

const prompt = require("prompt-sync")();

    let a = Number(prompt("Valor a: "));
    let b = Number(prompt("Valor b: "));
    let c = Number(prompt("Valor c: "));

    let aaj = a * 3600
    let baj = b * 60
    let segundos = aaj + baj + c

console.log("Segundos: ",segundos);
