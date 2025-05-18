const prompt = require('prompt-sync')();

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

console.log("Escolha entre 1, 2, 3 e descubra seu prêmio!")
let opcao = Number(prompt("Escolha seu número: "));

switch (opcao) {
    case 1:
        console.log("Opção número 1 escolhida")
        console.log("Você ganhou um livro!");
        break;
    case 2:
        console.log("Opção número 2 escolhida");
        console.log("Você ganhou uma caneta!");
        break;
    case 3:
        console.log("Opção número 3 escolhida");
        console.log("Você ganhou um lápis");
        break;
}