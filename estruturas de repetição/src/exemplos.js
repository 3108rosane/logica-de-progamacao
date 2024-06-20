
var numero = 0

while(numero < 10) {

  console.log("hello word:" + numero);
  numero++;
}

var estacarregando = true;
var porcentagem

while(estacarregando) {

    console.log(porcentagem + "%carregando...");
    if(porcentagem < 100){
        porcentagem += 5;
    }else {
        estacarregando = false;
    }
  }