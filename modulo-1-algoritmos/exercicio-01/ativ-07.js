const prompt = require('prompt-sync')();

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

let quantidade = Number(prompt("Quantas maças foram compradas? :"));
let custoTotal;

if (quantidade < 12) {
  custoTotal = quantidade * 0.30;
} else {
  custoTotal = quantidade * 0.25;
}

console.log(`O valor da compra é: R$ ${custoTotal.toFixed(2)}`);

