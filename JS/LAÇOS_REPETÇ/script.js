/*os laços de repetiçoes são comandos ultilizados para executar instruçoes mas de uma vez, ou seja , cria loops de repetição de uma ou mais intruç~ões com um limitado de vezes*/
// CUIDADO PARA NAO TRAVA O COMPUTADOR COM O LOOP INFINITO
//OPERADORES LOGIOS && = E,  || = OU, ! = NOT
//OPERADORES DE COMPARAÇAO  == , !=, <, > 
// 1º FOR = ( USADO QUANDO SABEMOS QUANSTAS VEZES VAMOS,OS REPETIR ALGO)
// 2º WHILE ( QUANDO NÃO SABEMOS)

for( let i = 1 ;i <=50; i++){
    console.log(`conatando o numero pedido é ${i}`)
}

for (fatia = 1; pizaa <=8; fatia++){
    console.log(`comendo  ${fatia} fatias de pizza`)
}

for (let bomba = 60;    tempo > 0; tempo++){
    console.log(`tempo restante ${tempo}`)
}

//trabalhado com while | while (usado quando nao sabemos exatamente a quantidade de veze, mas sabemos a condiçao)

while(condiçao){
    //continua exercultando
    // enquanto for verdade
}
let contador = 1
while(contador = 1; contador <=10; contador++ ) {

console.log(`contador`)}


while( chute != numerosct && tentativas <3){
    chute = Number(prompt(`chute(entre 1 e 10):`))
    tentativa++
    if (chute === numerosct){
        alert("ganhou o jogo")
    }
    else if(tentativas > 3 )
}
if ( chute != numerosct){
    alert(`Suas tentativa acabaram , o numero secreto era ${numerosct}`)
}