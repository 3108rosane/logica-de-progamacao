//validação de senha exerc 1

import leia from "readline-sync"

var senha = leia.question("DIGITE A SENHA");
    if (senha == '1234');{
    console.log ("acesso permitido");
}   else {
    console.log ("acesso negado");

    switch (senha){
        case "1234":
            console.log("permitir acesso!!")
            break;
        default:
            console.log("acesso negado");

    }
}

// dizer se o numero é impar ou par exec 2 

import leia from "readline-sync"

var numero = leia.questionInt(" impar ou par ");
    if ("numero % 2 == 0:");{

       console.log ("númeroPar");
    }
    else{
        console.log ("número impar");
    }
  
    // numero da placa que pode rodar em SP exerc3
    //

    import leia from "readline-sync"

    var placa = leia.questionInt("digite ultimo numero da placa");
    if ("placa 0 === || placa 1" );{
    console.log ("segunda feira não pode rodar");
    }elseif("placa final 2 ||  3");{
        console.log("terça feira não pode rodar");
    }elseif("placa final 4 || 5");{
        console.log("quarta feira não pode rodar");
    }elseif("placa final 6 || 7");{
        console.log("quinta feira não pode rodar");
    }elseif("placa final 8 || 9");{
        console.log("sexta feira não pode rodar");
    }

    //calcular custo das maçã exe 4

    import leia from "readline-sync"

    var quantidade = leia.questionInt("digite a quantidade");
        if ("quantidade < 12:");{
            console.log("custo total == quantidade * 0.30");
        }else("custo total == quantidade * 0.25")


    // execicios05

    import leia from "readline-sync"

var cliente1 = leia.question("DIGITE NOME CLIENTE 1: \n ")
var cliente2 = leia.question("DIGITE NOME CLIENTE 2: \n ")
var valorComp1 = leia.questionFloat("DIGITE O VALOR GASTO DO PRIMEIRO CLIENTE: \n ")
var valorComp2 = leia.questionFloat("DIGITE O VALOR GASTO DO SEGUNDO CLIENTE: \n ") 
var ValorTotal = valorComp1 + valorComp2
var Media =  ValorTotal / 2


console.log(cliente1 + "\n" +  valorComp1)
console.log(cliente2 + "\n" +  valorComp2)
console.log("VALOR TOTAL DA COMPRA FOI " + ValorTotal)
console.log(Media)

if(valorComp1 > 20 ){
    console.log("GASTOU MAIS DE 20 REAIS: \n " + cliente1)
}

if (valorComp2 > 20){
    console.log("GASTOU MAIS DE 20 REIAS: \n " + cliente2)
}

//exer 06

import leia from "readline-sync"

var valorProduto = leia.questionFloat("informe o valor do produto ")

var umReal =  leia.questionInt("QUANTIDADE DE MOEDAS R$1 \n ")
var cinquenta =  leia.questionInt("QUANTIDADE DE MOEDAS R$0,50 \n")
var vinteCinco =  leia.questionInt("QUANTIDADE DE MOEDAS R$0.25 \n")
var dez =  leia.questionInt("QUANTIDADE DE MOEDAS R$0.10 \n ")
var cinco =  leia.questionInt("QUANTIDADE DE MOEDAS R$0.05 \n"  )

var total = (umReal *1) + (cinquenta *0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco *0.05)

console.log("TOTAL ACUMULADO \n" + total)
console.log(" VALOR DO PRODUTO \n" + valorProduto)

if (total >= valorProduto){
    console.log("DEU BOA")
}else{
    console.log( " DEU RUIM")
}

//var messagem = total >= valorProduto ? "DEU BOA" : "DEU RUIM" ;

// exer07

import leia, { questionFloat } from "readline-sync"

var salario = leia.questionFloat(" DIGITE O SALARIO \n");
var salarioCalc = salario * 0.30
var valorEmprest = leia.questionFloat( "DIGITE O VALOR DO EMPRESTIMO \n ");
var parcela = leia.questionInt( " DIGITE EM QUANTAS VEZES QUER FAZER \n ");
var valorParcela =  valorEmprest / parcela

if (valorParcela <= salarioCalc) {
    console.log(" EMPRESTIMO NEGAGO")
}else{
    console.log("PARCELA FICOU \n " + valorParcela + " EM " + parcela)
}
// operador ternario
// var exemplo=(valorparcela <= salarioCalc)? "emprestimo aprovado" : "emprestimo reprovado";
// console.log(msg);


///// PARA FORMATAR E COLOCAR R$ NOS VALORES//var formatador = new Intl.NumberFormat("pt-BR",{
 //   style:"currency",
 //currency:"BR"
//})

 //exr08

 //import leia from "readline-sync"

var mes = leia.questionInt("DIGITE O NUMERO DO MES \n")


switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(" ESSE MES TEM 31 DIAS")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(" ESSE MES TEM 30 DIAS")
    case 2:
        console.log("DEPENDE DO ANO TEM 28 OU 29 DIAS")
    default:
        console.log( " MES INVALIDO")
        break;
}


        //exer09

        import leia, { questionInt } from "readline-sync"

var funcionario = leia.question("DIGITE SEU NOME \n")
var salario = leia.questionFloat("DIGITE SEU SALARIO \n")
var depedente = questionInt (" DIGITE QUANTIDADE DE DEPEDENTE \n")

switch (depedente) {
    case 0:
        var total = salario + (salario * 0.02)
       console.log(funcionario + " GANHA: " + total) 
        break;
    case 1:
        var total = salario + (salario * 0.05)
        console.log( funcionario + " GANHA: " + total)
        break
    case 2:
        var total = salario + (salario * 0.07)
        console.log( funcionario + " GANHA: " + total)
        break
    case 3: 
        var total = salario + (salario * 0.10) 
        console.log( funcionario + " GANHA: " + total)
        break
    case 4:
        var total = salario ( salario * 0.15)
        console.log( funcionario + " GANHA: " + total)
        break
    default:
        console.log("FUNCIONARIO NAO ENCONTRADO")
        break;
        
}









































    









    9
    ''



