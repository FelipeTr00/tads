let nome = prompt("Digite seu nome:");
let salario = Number(prompt("Qual o seu salário: "))

//popup/alert
alert("Olá " + nome + ".")

// abrir uma janela
document.write("Seu nome é: ", nome,".");

// Confirmar
if (confirm("Quer aumento de salário?")) {
    alert("Então vai ganahr o aumento!");
    novo = salario + (salario * 20 /100 );
        alert("Seu novo salário é: "+novo)
}   else {
    alert("Vai continuar pobre!")
}


