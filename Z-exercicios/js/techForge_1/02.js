// 2 Faça um algoritmo que leia nome, endereço e telefone de uma pessoa e apresente na tela:


    const prompt = require("prompt-sync")();
   
        let nome = prompt("Infome o seu nome: ");
        let endereco = prompt("Seu endereço: ");
        let tel = prompt("Digite seu telefone: ");

    console.log("Confira as informações: "+"\n"+
    nome+"\n"+endereco+"\n"+tel);
