const prompt = require('prompt-sync')();

/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

console.log("Os 10 primeiros números da sequência de Fibonacci:");

let a = 0;
let b = 1;

console.log(a); 
console.log(b); 

for (let i = 3; i <= 10; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}