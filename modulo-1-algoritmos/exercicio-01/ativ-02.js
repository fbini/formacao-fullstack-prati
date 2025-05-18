const prompt = require('prompt-sync')();

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.*/

let idade = Number(prompt("Escreva sua idade: "));

if (idade <= 12){
    console.log("Sua idade é:", idade, "Você é criança");

}else if (idade >= 13 && idade <= 17 ){
    console.log("Sua idade é:", idade, "Você é adolescente");

}else if (idade >= 18 && idade <=59){
    console.log("Sua idade é:", idade, "Você é adulto");

}else if (idade >=60 && idade <= 120){
    console.log("Sua idade é:", idade, "Você é idoso");
}else{
    console.log("Idade inválida");
}



