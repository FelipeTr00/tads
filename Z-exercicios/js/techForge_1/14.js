// 14 Faça um algoritmo que calcula o percentual de desconto para os clientes. As variáveis de entrada são o preço e o valor do desconto. As saídas devem ser, o valor original, o percentual de reajuste, o valor que foi reajustado e o valor resultante do reajuste.

const prompt = require("prompt-sync")();

    let preco = prompt("Informe o preço do produto: ");
    let desc = prompt("Informe o desconto do produto: ");

    let percentual = (100*parseFloat(desc) / parseFloat(preco)).toFixed(2);
    let liquido = parseFloat(preco - desc);

console.log(
    "Valor Original: R$"+ preco +";\n"+
    "Desconto (%): "+ percentual +";\n"+
    "Valor do Desconto: "+ desc +";\n"+
    "Valor Líquido R$: "+ liquido +"."
);
