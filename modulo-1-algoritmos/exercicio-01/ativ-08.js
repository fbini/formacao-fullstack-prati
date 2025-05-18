const prompt = require('prompt-sync')();

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

console.log("Digite dois valores diferentes");

let valorA = Number(prompt("Digite o primeiro valor:"));
let valorB = Number(prompt("Digite o segundo valor:"));

if (valorA < valorB) {
  console.log(`Valores em ordem crescente: ${valorA}, ${valorB}`);
} else {
  console.log(`Valores em ordem crescente: ${valorB}, ${valorA}`);
}