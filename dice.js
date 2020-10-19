//dice one
let oneEl= document.getElementById ('one')
let twoEl= document.getElementById ('two')
let threeEl= document.getElementById ('three')
let fourEl= document.getElementById ('four')
let fiveEl= document.getElementById ('five')
let sixEl= document.getElementById ('six')

//dice two
let one1El= document.getElementById ('one1')
let two1El= document.getElementById ('two1')
let three1El= document.getElementById ('three1')
let four1El= document.getElementById ('four1')
let five1El= document.getElementById ('five1')
let six1El= document.getElementById ('six1')
//dice three
let one2El= document.getElementById ('one2')
let two2El= document.getElementById ('two2')
let three2El= document.getElementById ('three2')
let four2El= document.getElementById ('four2')
let five2El= document.getElementById ('five2')
let six2El= document.getElementById ('six2')
//dice four
let one3El= document.getElementById ('one3')
let two3El= document.getElementById ('two3')
let three3El= document.getElementById ('three3')
let four3El= document.getElementById ('four3')
let five3El= document.getElementById ('five3')
let six3El= document.getElementById ('six3')
//dice five 
let one4El= document.getElementById ('one4')
let two4El= document.getElementById ('two4')
let three4El= document.getElementById ('three4')
let four4El= document.getElementById ('four4')
let five4El= document.getElementById ('five4')
let six4El= document.getElementById ('six4')
//dice six
let one5El= document.getElementById ('one5')
let two5El= document.getElementById ('two5')
let three5El= document.getElementById ('three5')
let four5El= document.getElementById ('four5')
let five5El= document.getElementById ('five5')
let six5El= document.getElementById ('six5')
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
    two1El.classList.add('remove')
    three1El.classList.add('remove')
    four1El.classList.add('remove')
    five1El.classList.add('remove')
    six1El.classList.add('remove')

    one2El.classList.add('remove')
    two2El.classList.add('remove')
    three2El.classList.add('remove')
    four2El.classList.add('remove')
    five2El.classList.add('remove')
    six2El.classList.add('remove')

    one3El.classList.add('remove')
    two3El.classList.add('remove')
    three3El.classList.add('remove')
    four3El.classList.add('remove')
    five3El.classList.add('remove')
    six3El.classList.add('remove')

    one4El.classList.add('remove')
    two4El.classList.add('remove')
    three4El.classList.add('remove')
    four4El.classList.add('remove')
    five4El.classList.add('remove')
    six4El.classList.add('remove')

    one5El.classList.add('remove')
    two5El.classList.add('remove')
    three5El.classList.add('remove')
    four5El.classList.add('remove')
    five5El.classList.add('remove')
    six5El.classList.add('remove')

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
    two1El.classList.remove('remove')
}
if (randomNumber2 === 3){
    three1El.classList.remove('remove')
}
if (randomNumber2 === 4){
    four1El.classList.remove('remove')
}
if (randomNumber2 === 5){
    five1El.classList.remove('remove')
}
if (randomNumber2 === 6){
    six1El.classList.remove('remove')
}

// DICE THREE
let randomNumber3 = getRandomInt(6)+1
if (randomNumber3 === 1){
    one2El.classList.remove('remove')
}
if (randomNumber3 === 2){
    two2El.classList.remove('remove')
}
if (randomNumber3 === 3){
    three2El.classList.remove('remove')
}
if (randomNumber3 === 4){
    four2El.classList.remove('remove')
}
if (randomNumber3 === 5){
    five2El.classList.remove('remove')
}
if (randomNumber3 === 6){
    six2El.classList.remove('remove')
}
// DICE FOUR
let randomNumber4 = getRandomInt(6)+1
if (randomNumber4 === 1){
    one3El.classList.remove('remove')
}
if (randomNumber4 === 2){
    two3El.classList.remove('remove')
}
if (randomNumber4 === 3){
    three3El.classList.remove('remove')
}
if (randomNumber4 === 4){
    four3El.classList.remove('remove')
}
if (randomNumber4 === 5){
    five3El.classList.remove('remove')
}
if (randomNumber4 === 6){
    six3El.classList.remove('remove')
}
// DICE FIVE
let randomNumber5 = getRandomInt(6)+1
if (randomNumber5 === 1){
    one4El.classList.remove('remove')
}
if (randomNumber5 === 2){
    two4El.classList.remove('remove')
}
if (randomNumber5 === 3){
    three4El.classList.remove('remove')
}
if (randomNumber5 === 4){
    four4El.classList.remove('remove')
}
if (randomNumber5 === 5){
    five4El.classList.remove('remove')
}
if (randomNumber5 === 6){
    six4El.classList.remove('remove')
}
// DICE SIX
let randomNumber6 = getRandomInt(6)+1
if (randomNumber6 === 1){
    one5El.classList.remove('remove')
}
if (randomNumber6 === 2){
    two5El.classList.remove('remove')
}
if (randomNumber6 === 3){
    three5El.classList.remove('remove')
}
if (randomNumber6 === 4){
    four5El.classList.remove('remove')
}
if (randomNumber6 === 5){
    five5El.classList.remove('remove')
}
if (randomNumber6 === 6){
    six5El.classList.remove('remove')
}
// let total = randomNumber + randomNumber2 + randomNumber3 +randomNumber4 + randomNumber5
// diceTotalEl.innerHTML = total
}
}


