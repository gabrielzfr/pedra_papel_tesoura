let res = document.getElementById('res')
let imgp = document.getElementById('imgplayer')
let imgc = document.getElementById('imgcomputer')

let valp = 0
help.innerHTML = valp

//#region choicesbuttons
function choicepdr() {
    valp = 1
    let choice = document.getElementById('choice')
    choice.innerHTML = '<p>Você escolheu <strong>Pedra</strong></p>'
    help.innerHTML = valp
}

function choiceppl() {
    valp = 2
    let choice = document.getElementById('choice')
    choice.innerHTML = '<p>Você escolheu <strong>Papel</strong></p>'
    help.innerHTML = valp
}

function choicetsr() {
    valp = 3
    let choice = document.getElementById('choice')
    choice.innerHTML = '<p>Você escolheu <strong>Tesoura</strong></p>'
    help.innerHTML = valp
}
//#endregion

function play(){
    
    let valm = Math.floor(Math.random() * 3 + 1)
    
    if (valp == 0) {
        alert('Selecione Pedra, Papel ou Tesoura para poder jogar')
    } else if (valp == 1){
        imgp.src = 'imagens/pedra-p.png'
        if (valm == 2) {
            res.innerHTML = 'Perdeu'
            valm = 'Papel'
            imgc.src = 'imagens/papel-p.png'
             
        } else if (valm == 3) {
            res.innerHTML = 'Ganhou'
            valm = 'Tesoura'
            imgc.src = 'imagens/tesoura-p.png'

        } else {
            res.innerHTML = 'Empate'
            valm = 'Pedra'
            imgc.src = 'imagens/pedra-p.png'

        }
    } else if (valp == 2) {
        imgp.src = 'imagens/papel-p.png'
        if (valm == 1){
            res.innerHTML = 'Ganhou'
            valm = 'Pedra'
            imgc.src = 'imagens/pedra-p.png'
        } else if (valm == 3) {
            res.innerHTML = 'Perdeu'
            valm = 'Tesoura'
            imgc.src = 'imagens/tesoura-p.png'
        } else {
            res.innerHTML = 'Empate'
            valm = 'Papel'
            imgc.src = 'imagens/papel-p.png'
        }
    } else if (valp == 3) {
        imgp.src = 'imagens/tesoura-p.png'
        if (valm == 1) {
            res.innerHTML = 'Perdeu'
            valm = 'Pedra'
            imgc.src = 'imagens/pedra-p.png'
        } else if (valm == 2){
            res.innerHTML = 'Ganhou'
            valm = 'Papel'
            imgc.src = 'imagens/papel-p.png'
        } else {
            res.innerHTML = 'Empate'
            valm = 'Tesoura'
            imgc.src = 'imagens/tesoura-p.png'
        }

    }
    help.innerHTML = `valp ${valp} e valm ${valm}`
}
