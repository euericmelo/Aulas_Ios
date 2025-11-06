//
let mudou = false
function mudarFundo(){
if (mudou == false){
    document.body.style.backgroundColor = "black"
    mudou = true // Agora mudou a cor
}
else{
    document.body.style.backgroundColor = "white"
    mudou = false

}
}

//

function compararSenha(){
    let senha1 = document.getElementById("senha1").value
let senha2 = document.getElementById("senha2").value
let mensagem = document.getElementById("mensagem")
    if (senha1 === "" || senha2 === "")
        {
            mensagem.innerText = "Por facor digite as duas senhas"
            mensagem.style.color = "red";

    }
    else if (senha1 === senha2){
        mensagem.innerText = " Senha criada parabens"
        mensagem.style.color = "green";
    }
    else{
        mensagem.innerText = "As senhas não conferem. tente novamente"
        mensagem.style.color = "orange";
    }
}

// Soma Numeros

function somaNumeros(){
const numero1 = Number(document.getElementById("numero1").value)
const numero2 = Number(document.getElementById("numero2").value)
resultado.innerText = `${numero1+numero2}`
}

// Mudar texto
function mudarTexto(){
    document.getElementById("text").innerText ="Tema Claro"
}