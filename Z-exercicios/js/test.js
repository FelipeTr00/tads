//#############################################################
//############******LISTA DE EXERCÍCIOS******##################
//#############################################################

// impotando a lib
const prompt = require("prompt-sync")();

// Função para executar o exercício escolhido
function runExercise(exerciseNumber) {
  const exercise = exercises[exerciseNumber];
  if (exercise) {
    exercise();
  } else {
    console.log("Exercício não encontrado.");
  }
}

// Função para iniciar o framework
function startFramework() {
  const selectedExercise = Number(prompt("Digite o número do exercício que deseja executar: "));
  runExercise(selectedExercise);
}

// Inicia o framework
startFramework();

// Funções para cada exercício
const exercises = {
  1: () => {
    let num = Number(prompt("Valor: "));
    if (num % 2 === 0 && num % 10 === 0) {
      console.log("Par e divisível por 10.");
    } else {
      console.log("Não é par ou não é divisível por 10.");
    }
  },
  2: () => {
    let num = Number(prompt("Valor: "));
    if (num % 7 === 0 || num % 23 === 0) {
      console.log("É divisível por 7 ou por 23.");
    } else {
      console.log("Não é divisível por 7 ou por 23.");
    }
  },
  // Adicione as demais funções dos exercícios aqui
};