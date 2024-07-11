//pedir 10 nomes/Faça um algoritmo que receba o nome de 10 estudantes e para cada estudante receba 3
//notas. O algoritmo deve calcular a média dos 10 estudantes e mostrar o nome e média do
//estudante que teve a maior média.

import leia from 'readline-sync';

var nomeMaiorMedia;
var maiorMedia;
var i = 1;
while(i < 10){
    var nome = leia.question("digite o nome " + i + ":");
    var somaNotas = 0.0;
    for(var j = 1; j <= 3; j++){
        somaNotas += leia.questionFloat("digite o nota 0" + j + ":" );
    }

    var media = somaNotas/ 3;
    if(maiorMedia === undefined || media > maiorMedia){
        maiorMedia = media;
        nomeMaiorMedia = nome;
    }


    i++;
    

}

console.log("estudante com maior media foi" + nomeMaiorMedia + " com " + maiorMedia);