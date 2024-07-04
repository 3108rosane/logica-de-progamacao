import leia from "readline-sync"

var lista = [1,2,3,4,5,6,7,8,9,10];
var lista2 = []

for(var i = lista.length - 1; i >= 0; i--){
    lista2.push(lista[i])
}

lista = lista2;

console.log(lista)