
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMoscaTempo = 1500
}else if(nivel === 'dificil'){
    criaMoscaTempo = 1000
}if(nivel === 'impossivel'){
    criaMoscaTempo = 750
}



function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura, altura)
}
    
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

    tempo -= 1

    if( tempo < 0){

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
} ,1000)

function posicaoRandomica(){

    //remover mosquito anterior (caso exista)
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        //console.log('elemento v ' + vidas)

        if(vidas > 3){

            window.location.href = 'Fim_de_jogo.html'
            alert('Interromper o jogo (game over)')
        }else{
       document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

       vidas++
        }
    }
    

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX <0 ? 0 : posicaoX
posicaoY = posicaoY <0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)


//criar o elemento HTML
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosca'
mosquito.onclick = function(){
    this.remove()
}

document.body.appendChild(mosquito)

tamanhoAleatorio()

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}


function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}