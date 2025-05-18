const prompt = require('prompt-sync')();

/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

let soma = 0;
console.log("Digite 5 números para calcular a soma:");

for (let i = 0; i < 5; i++) {
  let numeroLoop = Number(prompt(`Digite o número ${i + 1}:`));
  soma += numeroLoop;
}

console.log(`A soma dos números é: ${soma}`);