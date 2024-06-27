import leia from 'readline-sync'


var numero = leia.questionInt("digite um numero")
var resultado = 1;
 while (numero > 0){
    resultado = resultado * numero;
    numero--;
 }
 console.log("fatorial e " + resultado);