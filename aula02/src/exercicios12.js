
import leia from "readline-sync";

var idade = leia.questionInt("informe sua idade");
if("idade < 18"){
    var permissao = leia.questionInt("seus pais permitiram a viagem\n 1 - sim\n 2 - não");
    if(permissao === "1"){
        var nome = leia.question("informe seu nome");
        console.log("vc pode viajar tranquilo" + nome);
  }else if(permissao === "2"){
    console.log("nao tem permissao para viajar");
  }else { 
    console.log("opçao invalida");
  }
}else {
    var nome = leia.question("informe seu nome:");
    console.log("vc pode viajar tranquilo" + nome);
}