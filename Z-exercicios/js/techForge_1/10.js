// 10 Dado um conjunto de valores que representam a quantidade diária de chuva (em polegadas) que caiu na última semana (segunda a sexta) em Campo Mourão, faça um algoritmo para converter a quantidade total de chuva da semana em milímetros. Sabe-se que 1 polegada corresponde a 25,4 milímetros. 

const inchesTomm = 25.4;

const prompt = require("prompt-sync")();

    let seg = parseFloat(prompt("Informe a chuva para Segunda-feira: "));
    let ter = parseFloat(prompt("Informe a chuva para Terça-feira: "));
    let qua = parseFloat(prompt("Informe a chuva para Quarta-feira: "));
    let qui = parseFloat(prompt("Informe a chuva para Quinta-feira: "));
    let sex = parseFloat(prompt("Informe a chuva para Sexta-feira: "));

let totalinches = seg + ter + qua + qui + sex;
let totalmm = (totalinches * inchesTomm);
let media = (totalmm/5);
let min = (Math.min(seg, ter, qua, qui, sex));
let max = (Math.max(seg, ter, qua, qui, sex));

console.log(
    "\n"+
"Estatísticas da chuva na semana:"+"\n"+
"{Seg "+seg+"; Ter "+ter+
"; Qua "+qua+"; Qui "+qui+
"; Sex "+sex+"}"+"\n"+"\n"+
"Polegadas: "+ totalinches +"\n"+
"Milímetros: "+ totalmm.toFixed(1) +"\n"+
"Média: "+ media.toFixed(1) +"\n"+
"Mínimo: "+ min +"\n"+
"Máximo: "+ max

);






