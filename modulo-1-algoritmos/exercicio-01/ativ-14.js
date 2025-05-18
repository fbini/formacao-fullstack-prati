const prompt = require('prompt-sync')();

/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

let numeroFatorial = Number(prompt("Escreva um número inteiro não negativo para calcular o fatorial:"));

if (numeroFatorial < 0) {
  console.log("Fatorial não definido para números negativos.");
} else if (numeroFatorial === 0) {
  console.log("O fatorial de 0 é 1.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);
}