const prompt = require('prompt-sync')();

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. 
peso (kg) ÷ (altura x altura)

Baixo peso: IMC abaixo de 18,5
Peso normal: IMC entre 18,5 e 24,9
Sobrepeso: IMC entre 25 e 29,9
Obesidade: IMC a partir de 30*/

console.log("Calcule o Índice de Massa Corporal (IMC)")

let peso = parseFloat(prompt("Digite seu peso: "));
let altura = parseFloat(prompt("Digite sua altura: "));

let resultado = (peso / (altura * altura))
let imc = resultado.toFixed(2);

if (imc <= 18.5 ){
    console.log("Você está abaixo do peso:", imc)
}else if (imc >= 19 && imc <= 24.9){
    console.log("Você está no peso ideal:", imc)
}else if (imc >= 25 && imc <= 29.9){
    console.log("Você está com sobrepeso:", imc)
}else if (imc >= 30){
    console.log("Você está com obesidade:", imc)
}