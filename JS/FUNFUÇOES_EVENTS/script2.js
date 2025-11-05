// evento clique

//document.getElementById()

function mudartexto(){
    document.getElementById("sobre").innerText ="Eric Martins"
    document.getElementById("texto").innerText ="Aqui esta meu nome com sobrenome"
     document.getElementById("texto").style.color = "red"
}
function cor(){
 let caixa = document.getElementById("sobre")
    caixa.style.backgroundColor = "blue"

}
function sair(){
    let caixa2 = document.getElementById("sobre")
    caixa2.style.backgroundColor = "white"
}

//function mostraTexto {const input = document.getElementById("nome")

 function mudarCor(){
    let cor1 = document.getElementById("cor").value;
    document.body.style.backgroundColor = cor1
 }

