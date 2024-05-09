//VARIAVEIS E FUNÇÕES

/*
Exercício 1.1
Faça um programa que exiba 3 números na tela.
*/ 

/* 
var n1 = 20;
var n2 = 30;
var n3 = 40; 

console.log(n1);
console.log(n2);
console.log(n3);
*/

/*
Exercício 1.2
Faça um programa que leia 3 números e exiba-os na tela.
*/

/*
n1 = Number (prompt());

console.log(n1);
*/

/*
Exercício 1.3
faça um programa que leia 3 numeros, some-os e exiba as médias entre eles.
*/

/*
let n1 = 3;
let n2 = 5;
let n3 = 8;

let mediaEntreDoisNumeros = (n1 + n2) /2;
let mediaEntreTresNumeros = (n1 + n2 + n3) /2;

console.log(`A media entre o numero ${n1} e ${n2} é ${mediaEntreDoisNumeros}`);
console.log(`A media entre o numero ${n1}, ${n2} e ${n3} é ${mediaEntreTresNumeros}`);
*/

/*
Exercício 1.4
Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.
*/

/*
function temperatura(){
let Fahrenheit = 100;
let Celsius = ((Fahrenheit - 32) * 5) / 9;
console.log(Celsius);
}

temperatura();
*/

//-----------------------------------------------------------------------------------------------------------------------

//CONDICIONAIS(IF, ELSE)

/*
Exercício 2.1
Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.
*/

/*
function resultado(soma){

    var n1 = 39;
    var n2 = 60;

    soma = n1 + n2;

    if(soma >= 100){
        console.log("Foi maior ou igual a 100 :)");
    }
    else{
        console.log("Foi menor que 100 :(");
    }
}

resultado();
*/


/*
Exercício 2.2
Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.
*/

/*
function PersonagemMorreu(dano, saude){

saude = 100;
dano = 10;

    if(dano>saude){
        console.log(1);
        console.log("ELE ESTÁ MORTO")
    }
    else{
        console.log(0);
        console.log("ELE ESTÁ VIVO");
    }
}

PersonagemMorreu();
*/

/*
Exercício 2.3
Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.
*/

/*
function LimitaPosição(posicao){
    if(posicao < 0 || posicao > 100){
        console.log("SAIU FORA DA TELA DO JOGO!! ERROR!!!!!!!!");
    }
else{
    console.log("A posição do inimigo é: " + posicao);
}

}

LimitaPosição(88);
*/

//-----------------------------------------------------------------------------------------------------------------------

//Loop

/*
Exercício 3.1
Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
*/

/*
let numero = 7

for (let i = 0; i <= 10; i++) {
  console.log(numero * i)
}
*/

//-----------------------------------------------------------------------------------------------------------------------

//