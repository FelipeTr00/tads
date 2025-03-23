// 15 Escreva um algoritmo para efetuar o cálculo da quantidade de litros de combustível gastos em uma viagem, utilizando-se um automóvel que faz 16 km por litro. Para obter o cálculo, o usuário deverá fornecer o tempo gasto na viagem e a velocidade média durante a mesma. Desta forma, será possível obter a distância percorrida com a fórmula DISTÂNCIA = TEMPO * VELOCIDADE. Tendo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula: LITROS_USADOS = DISTÂNCIA / 16. O programa deverá apresentar a distância percorrida e a quantidade de litros de combustível utilizados na viagem.

const prompt = require("prompt-sync")();

    let tempo = parseFloat(prompt("Informe o tempo: "));
    let vel = parseFloat(prompt("Informe a velocidade média: "));

    let dist = (tempo * vel);
    let litros = (dist / 16);

console.log(
    "Distância percorrida: "+dist+".\n"+
    "Litros de Combustível: "+ litros+".");