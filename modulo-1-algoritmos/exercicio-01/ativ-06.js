const prompt = require('prompt-sync')();

/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/ 

console.log("Descobra o tipo do triângulo")

let ladoA = Number(prompt("Escreva o valor do lado A:"));
let ladoB = Number(prompt("Escreva o valor do lado B:"));
let ladoC = Number(prompt("Escreva o valor do lado C:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("Os lados fornecidos formam um triângulo.");

  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo de triângulo: Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo de triângulo: Isósceles");
  } else {
    console.log("Tipo de triângulo: Escaleno");
  }
} else {
  console.log("Não forma um triângulo.");
}