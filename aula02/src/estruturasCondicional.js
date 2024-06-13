

//IF/ELSE
var  valor = 10;
if(valor > 10){
    console.log("simmmm")

}else   {
    console.log("nãoooo")

}

var numero = 1;

if(numero > 0){
    console.log("numero positivo...");
} else if (numero < 0){
    console.log("numero negativo...");

}else {
    console.log(" o numero é zero.");

}
//

var x = 10;
if (x < 100){ 
    console.log("menor que mil");

}
if (x < 1000){
    console.log("menor que mil");
}   
//

var codigoErro = leia.questionInt("DIGITE O CODIGO DE ERRO");
switch (codigoErro){
    case 400 : 
    case 401 :
    case 404 :
        console.log("HTTP CODE - ERRO DE APLICAÇÃO")
        break;

    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE - ERRO DE SERVIDOR")
        break; 
    default:
        console.log("NÃO É ERRO")
        break;
}
