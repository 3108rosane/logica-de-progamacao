var lista = ["Rosane", "maia"]

console.log(lista[0])
console.log(lista[1])

var lista = [] // jogar itens na lista
lista.push("Rosane");

var soma = lista[0] +lista[1]
lista.push(10);
lista.push(41)

//

var lista = [];
for(var i = 0; i < 10;1++){
    lista[i] = "rosane"
}
console.log(lista);
//criar uma lista
 var lista = []
  

 //-------------procurar na lista
var i = 4;
while(i >= 0){
lista[i] = leia.question ("digite um nome")
i--;
}

//----------------

 for(var j = 0; j < lista.length; j++){
    if(lista[j].includes("sta")){
        console.log(lista[j])
    }
 }

 for(var valor of lista){
    if(valor.includes("sta")){
        console.log
    }
 }
//----------------------

for(var valor of lista){
    console.log(valor)
}

//---------------

var i = 5;
while(i >= 0){
    var numeroaleatorio = parseInt(Math.random() * 60) +1
    lista.push(numeroaleatorio);
    i++
}