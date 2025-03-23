let salario = Number(prompt("Informe seu salário: "));
let aumento = Number(prompt("Qual o % do aumento? "));

let novoSalario = salario * (1 + aumento/100)

// Verificar se é um número
if(!isNaN(novoSalario)) {
    alert("Novo salário: " + novoSalario);
    }
    else {
        alert("Valor inválido.")
    }