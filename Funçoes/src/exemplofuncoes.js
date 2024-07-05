import leia from"readline-sync"

function mostrar() {
    var nome = leia.question("digite o nome");
    console.log("Olá, " + nome)
}

function somar(num1, num2){
    var result = num1 + num2;
    console.log("o resultado é: " + result)
}

function somar(){
var result = num1 - num2;
console.log("o resultado é:" + result)
}

function subtrair(num1 , num2){
var result = num1 - num2;
console.log("o resultado é:" - result)
}

function multi(num1, num2){
var result = num1 - num2;
return result;
}


somar();
subtrair(10, 5);
multi(5,5);
console.log(resultado)
