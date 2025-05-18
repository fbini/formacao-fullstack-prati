const prompt = require('prompt-sync')();

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

let nota = Number(prompt("Digite sua nota: "));

if (nota >= 6) {
    console.log("Aprovado");
}else if (nota >= 2 && nota <= 5) {
    console.log("Recuperação");
}else {
    console.log("Reprovado");
}
