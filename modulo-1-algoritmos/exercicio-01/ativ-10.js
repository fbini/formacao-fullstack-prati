const prompt = require('prompt-sync')();

/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

console.log("Escolha um número para ser escrito 10 vezes")
let numero = Number(prompt("Digite o número:  "));

for(let i = 0; i<=10; i++) {
    console.log(numero)
}