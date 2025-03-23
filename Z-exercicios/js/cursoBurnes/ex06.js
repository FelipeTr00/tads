function mostrarValores() {
let mensagem = document.querySelector("#mensagem");
alert(mensagem.innerHTML)

let texto = document.querySelector(".texto");
alert(texto.innerHTML);

}

//mostrarValores()

function trocarValor() {
    let texto = prompt("Digite o texto: ");
    document.querySelector("#mensagem").innerHTML = texto;
} 

function calcular() {
    // Produto
    let produto = prompt("Produto: ");
    let valor = prompt("Valor: ");
    let parcelas = prompt("Parcelas: ");
    let juros = prompt("Juros ao mês: ");

    // parseFloat int or float
    valor = parseFloat(valor);
    parcelas = parseInt(parcelas);
    juros = parseFloat(juros);

    // Calculo

    let novaParcela = valor / parcelas;

    document.querySelector("#mensagem").innerHTML = "Valor da parcela sem juros: " + novaParcela;

    let texto = "";
    // Limpar o campo ".texto"
    document.querySelector(".texto").innerHTML = "";

    let total = 0;

    for(i = 1; i <= parcelas; i++) {
        if (i > 1 ) {
            // Calcular juros
            novaParcela = Number(novaParcela * (1 + juros / 100));
        }

        total = novaParcela + total;

        texto += document.querySelector(".texto").innerHTML;
        texto += i + " - Nova Parcela: "+ novaParcela.toFixed(2)+ "<br>";
    }

    texto += "Valor total: "+ total.toFixed(2);
    document.querySelector(".texto").innerHTML = texto;

}