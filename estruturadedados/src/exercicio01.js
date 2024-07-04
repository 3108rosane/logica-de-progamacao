import leia from "readline-sync"
//preenche as primeira lista
var lista = [];
var lista2 = []
for(var i = 0; i < 10; i++){
    lista[i] = leia.questionInt ("digite um numero");
    // lista[i} = parseInt(math.random()* 80 ) + 20
}

// manipular as listas

for(var i = 0; i < lista.length; i++){
    lista2[i] = lista[i] * 5;
}
console.log (lista)