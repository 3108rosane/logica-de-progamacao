import leia from 'readline-sync'
var numero = leia.questionInt("Digite quantos termos da sequência Fibonacci deseja mostrar: ");
var anterior = 1;
var atual = 1;
var proximo;
var resultado = "1 - 1";

 for(var i = 2; i < numero; i++){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    resultado = resultado + " - " + proximo;


 }
 console.log(resultado);

 


