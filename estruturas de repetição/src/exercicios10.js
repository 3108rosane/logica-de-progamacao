
import leia from 'readline-sync'

var alturaValentina = 1.50;
var alturaJoao = 1.40;
anos = 0;

while(alturaValentina > alturaJoao){
    alturaJoao += 0.03;
    alturaValentina += 0.02;
    anos++;
}

console.log("demora" + anos + "para joao maior que valentina")