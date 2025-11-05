
/*ALERT()
PROMPT()
CONSOLE.CLEAR()
CONSOLE.LOG()
COMFIRM()
WHILE()
IF()
ELSE()*/

// SINTAXE FUNÇOES
//FUÇAO SIMPLES

function saudacao(){
    alert("Bem vindo ao meu site")
}
// FUNÇÃO COM PARAMETROS

function soma(valor1, valor2) {
resultado = valor1+valor2
return resultado // usamos para retorna algo dentro da fuçao.
}
//alert(soma(1,2))

function dobro(numero){
numero = Number(prompt(`Bem vindo pode digitar um numero`))
   resultado = numero*2
return resultado
}
//alert(dobro(2))

// ========================= DESCONTO ==========================

function desconto (desconto,produto){
    let desconto = Number(prompt("Digite o valor do desconto"));
    let produto = Number(prompt("Digite o valor do produto"));
    let valor= desconto / 100;
     let  div = produto *valor
     let desconto = produto -  div

return desconto
}