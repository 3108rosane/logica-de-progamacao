import leia from 'readline-sync'
var numero = leia.questionInt("informe o numero")
for(var i = 1000 ; i >= 1999 ; i ++){
 
    if( i % 11 === 5){
        console.log("numero: "+i + "/ 11 = 5")
    }
}