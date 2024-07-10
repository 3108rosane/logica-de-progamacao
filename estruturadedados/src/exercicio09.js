// crie um algoritmo que gere um vetor com 10 itens

import leia from "readline-sync"

function preencherVetor(tamanhoVetor, max , min){
    var vetor = [];
    for(var i = 0; i < tamanhoVetor; i++){
        vetor[i] = parseInt(Math.random() *(max - min)) + min
    }
    return vetor;
}

var vetor = preencherVetor(10, 0, 100);

for (var i = 0; i < vetor.length; i++) {
    for(var j = i; j < vetor.length; j++){
        if(j !== i && vetor[i] === vetor[j]){

        }

    }
    
    
}

console.log(vetor);
    
