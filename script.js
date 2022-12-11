let = personagem = document.querySelector('.personagem')
let = obstaculo = document.querySelector('.obstaculo')

function pular(){
   if(personagem.classList != 'animar'){
       personagem.classList.add('animar')
}

setTimeout(function(){
    personagem.classList.remove('animar')
},500)

}


var testarColisao = setInterval(function(){

var topoPersonagem = parseInt(
    window.getComputedStyle(personagem).getPropertyValue ('top')
)

var esquerdaObstaculo = parseInt(
    window.getComputedStyle(obstaculo).getPropertyValue ('left')

)
if(esquerdaObstaculo < 20 && esquerdaObstaculo > 0 && topoPersonagem >= 130){
    obstaculo.style.animation = 'none'
    obstaculo.style.display = 'none'
    alert('Você Perdeu!!!')

}

},10)