import leia from 'readline-sync'

var menorAltura = leia.questionFloat("informe altura")
var maiorAltura = leia.questionFloat("informe altura")
var somaAltMulheres = 0.0
var quantidadeMulheres = 0
var somaAltTotal = 0.0
var quantidadePessoas = 0
var quantidadeHomens = 0

for(var i = 0; < 10; i++){
var genero = leia.keyInSelect(["mascolino" , " feminino"]) +1
var altura = leia.keyInSelect("informe sua altura: ");
}
    
    
    
    if Altura > maiorAltura
        maiorAltura = altura
    if Altura < menorAltura
        menorAltura = Altura
    
     
    if genero == 1:
        soma_altura_mulheres += altura
        quantidade_mulheres += 1
    
    
    soma_altura_total += altura
    quantidade_pessoas += 1
    
    
    if genero == 0;
        quantidade_homens += 1

if quantidade_mulheres > 0;
    media_altura_mulheres = soma_altura_mulheres / quantidade_mulheres
else
    media_altura_mulheres = 0.0

if quantidade_pessoas > 0:
    media_altura_total = soma_altura_total / quantidade_pessoas
else:
    media_altura_total = 0.0

percentual_homens = (quantidade_homens / quantidade_pessoas) * 100
    }