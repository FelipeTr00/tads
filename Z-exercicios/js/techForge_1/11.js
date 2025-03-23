

// 11 Calcule a média de um aluno na disciplina de algoritmos. Sabe-se que a média é composta por 4 avaliações bimestrais.

const prompt = require("prompt-sync")();

    let bimestre1 = parseFloat(prompt("1º Bimestre: "));
    let bimestre2 = parseFloat(prompt("2º Bimestre: "));
    let bimestre3 = parseFloat(prompt("3º Bimestre: "));
    let bimestre4 = parseFloat(prompt("4º Bimestre: "));

let media = ((bimestre1 + bimestre2 +
     bimestre3 + bimestre4) / 4).toFixed(2);

let status;

     if (media >= 7) {
         status = "Aprovado.";
     } else {
         status = "Reprovado.";
     }

console.log("\n"+

"Notas: "+bimestre1+", "+
          bimestre2+", "+
          bimestre3+", "+
          bimestre4+".", "\n"+

"Média: "+media, "\n"+

"Status: "+status

);
