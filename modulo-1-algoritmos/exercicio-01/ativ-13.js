const prompt = require('prompt-sync')();

/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

let somaMedia = 0;
let contadorMedia = 0;
let numeroMedia;

console.log("Digite números decimais para calcular a média.");
console.log("Digite 0 para parar.");

while (true) {
  numeroMedia = Number(prompt("Digite um número:"));

  if (numeroMedia === 0) {
    break; 
  }

  somaMedia += numeroMedia;
  contadorMedia++;
}

if (contadorMedia > 0) {
  let media = somaMedia / contadorMedia;
  console.log(`A média dos números é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número válido foi inserido para calcular a média.");
}