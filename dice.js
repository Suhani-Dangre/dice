let oneEl= document.getElementById ('one')
let twoEl= document.getElementById ('two')
let threeEl= document.getElementById ('three')
let fourEl= document.getElementById ('four')
let fiveEl= document.getElementById ('five')
let sixEl= document.getElementById ('six')

//dice two
let one1El= document.getElementById ('one1')
let two2El= document.getElementById ('two2')
let three3El= document.getElementById ('three3')
let four4El= document.getElementById ('four4')
let five5El= document.getElementById ('five5')
let six6El= document.getElementById ('six6')
//Math Part
let diceTotalEl = document.getElementById ('total')

let randomNumber = getRandomInt(6)

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}
document.body.onkeyup = function(e){
    if(e.keyCode == 32){

    oneEl.classList.add('remove')
    twoEl.classList.add('remove')
    threeEl.classList.add('remove')
    fourEl.classList.add('remove')
    fiveEl.classList.add('remove')
    sixEl.classList.add('remove')

    one1El.classList.add('remove')
    two2El.classList.add('remove')
    three3El.classList.add('remove')
    four4El.classList.add('remove')
    five5El.classList.add('remove')
    six6El.classList.add('remove')

    let randomNumber = getRandomInt(6) + 1 

    if (randomNumber === 1){
        oneEl.classList.remove('remove')
    }
    if (randomNumber === 2){
        twoEl.classList.remove('remove')
    }
    if (randomNumber === 3){
        threeEl.classList.remove('remove')
    }
    if (randomNumber === 4){
        fourEl.classList.remove('remove')
    }
    if (randomNumber === 5){
        fiveEl.classList.remove('remove')
    }
    if (randomNumber === 6){
        sixEl.classList.remove('remove')
    }
// DICE TWO
let randomNumber2 = getRandomInt(6)+1
if (randomNumber2 === 1){
    one1El.classList.remove('remove')
}
if (randomNumber2 === 2){
    two2El.classList.remove('remove')
}
if (randomNumber2 === 3){
    three3El.classList.remove('remove')
}
if (randomNumber2 === 4){
    four4El.classList.remove('remove')
}
if (randomNumber2 === 5){
    five5El.classList.remove('remove')
}
if (randomNumber2 === 6){
    six6El.classList.remove('remove')
}
let total = randomNumber + randomNumber2
diceTotalEl.innerHTML = total

}
}
