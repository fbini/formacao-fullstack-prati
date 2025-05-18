const prompt = require('prompt-sync')();

/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

let numeroTabuada = Number(prompt("Escreva um número para exibir a tabuada (de 1 a 10):"));

if (numeroTabuada >= 1 && numeroTabuada <= 10) {
  console.log(`Tabuada do ${numeroTabuada}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
  }
} else {
  console.log("Número fora do intervalo de 1 a 10.");
}