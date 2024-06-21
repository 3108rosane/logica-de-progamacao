import leia from 'readline-sync'

var nota = leia.questionFloat("digite a nota");
while(nota < 0.0 || nota > 10.0){
    console.log("nota invalida")
    nota = leia.questionFloat("digite a nota novamente");
}
console.log("nota valida")


var i = 0
while(i < 10){
    console.log(i)
    i++
}



for(var i = 0; i <= 10; i ++){
    console.log("valor de i = " + i);
}


var j = 0;

do {
    console.log(j)
    j++
}while(j < 0);