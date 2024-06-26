import leia from 'readline-sync'
var numero = leia.questionInt("informe o numero")
for(var i = numero ; i >= 0 ; i --){
    console.log("valor de i = " + i);
}