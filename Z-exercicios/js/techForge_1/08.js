// 8 Faça um algoritmo que com um valor em segundos retorne à quantidade de horas, minutos e segundos equivalentes. Por exemplo, 6010 segundos são 1 hora, 40 minutos e 10 segundos.

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