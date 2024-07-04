import leia from "readline-sync"

var lista = []
var soma = 0
for(var i = 0; i < 5; i++){
    lista[i] = leia.questionInt ("digite um numero");
}

for(var i = 0; i < 5; i++ ){
    soma += lista[i]
}
console.log("soma = " + soma)
lista.forEach(valor => console.log(valor));