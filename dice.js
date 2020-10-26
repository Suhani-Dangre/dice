let dice1 = 0
let dice2 = 0
let dice3 = 0
let dice4 = 0
let dice5 = 0
let dice6 = 0
let buttonEl = document.getElementById ('calcScore')
let totalScoreEl = document.getElementById ('totalScore')

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


if (dice1 === 0){
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
}// end of Dice 1 if Loop


// DICE TWO 
if (dice2 === 0){
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
}// end of Dice 2 if Loop

// DICE THREE
if (dice3 === 0){
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
}

// DICE FOUR
if (dice4 === 0){
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
}

// DICE FIVE
if (dice5 === 0){
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
}

// DICE SIX
if(dice6 === 0){
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
}
console.log(`${scoreEl}, yay you made it?`)

}
}












//PART TWO OF CODE














let DF1 = 0
let DF2 = 0
let DF3 = 0
let DF4 = 0
let DF5 = 0
let DF6 = 0
let scoreEl = 0
let total = 0
let assideButton = document.getElementById('asside')
let sixDieButton = document.getElementById('sixDie')






//Dice One






oneEl.addEventListener('click', highlight1)
function highlight1(){
    oneEl.classList.add('highlight')
    scoreEl = 100
    assideButton.addEventListener('click', remove)
    function remove(){
        oneEl.classList.add('remove')
        dice1= 1
        DF1= 1
        
    }
}

twoEl.addEventListener('click', highlight2)
function highlight2(){
    twoEl.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        twoEl.classList.add('remove')
        dice1= 1
        DF1= 2
    }
}
threeEl.addEventListener('click', highlight3)
function highlight3(){
    threeEl.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        threeEl.classList.add('remove')
        dice1= 1
        DF1= 3
    }
}
fourEl.addEventListener('click', highlight4)
function highlight4(){
    fourEl.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        fourEl.classList.add('remove')
        dice1= 1
        DF1= 4
    }
}
fiveEl.addEventListener('click', highlight5)
function highlight5(){
    fiveEl.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        fiveEl.classList.add('remove')
        dice1= 1
        DF1= 5
        scoreEl = 50
    }
}
sixEl.addEventListener('click', highlight6)
function highlight6(){
    sixEl.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        sixEl.classList.add('remove')
        dice1= 1
        DF1= 6
    }
}






//Dice Two






one1El.addEventListener('click', highlight11)
function highlight11(){
    one1El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        one1El.classList.add('remove')
        dice2= 1
        DF2= 1
        scoreEl = 100
    }
}
two1El.addEventListener('click', highlight21)
function highlight21(){
    two1El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        two1El.classList.add('remove')
        dice2= 1
        DF2= 2
    }
}
three1El.addEventListener('click', highlight31)
function highlight31(){
    three1El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        three1El.classList.add('remove')
        dice2= 1
        DF2= 3
    }
}
four1El.addEventListener('click', highlight41)
function highlight41(){
    four1El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        four1El.classList.add('remove')
        dice2= 1
        DF2= 4
    }
}
five1El.addEventListener('click', highlight51)
function highlight51(){
    five1El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        five1El.classList.add('remove')
        dice2= 1
        DF2= 5
        scoreEl = 50
    }
}
six1El.addEventListener('click', highlight61)
function highlight61(){
    six1El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        six1El.classList.add('remove')
        dice2= 1
        DF2= 6
    }
}






//Dice Three






one2El.addEventListener('click', highlight12)
function highlight12(){
    one2El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        one2El.classList.add('remove')
        dice3= 1
        DF3= 1
        scoreEl = 100
    }
}
two2El.addEventListener('click', highlight22)
function highlight22(){
    two2El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        two2El.classList.add('remove')
        dice3= 1
        DF3= 2
    }
}
three2El.addEventListener('click', highlight32)
function highlight32(){
    three2El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        three2El.classList.add('remove')
        dice3= 1
        DF3= 3
    }
}
four2El.addEventListener('click', highlight42)
function highlight42(){
    four2El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        four2El.classList.add('remove')
        dice3= 1
        DF3= 4
    }
}
five2El.addEventListener('click', highlight52)
function highlight52(){
    five2El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        five2El.classList.add('remove')
        dice3= 1
        DF3= 5
        scoreEl = 50
        
    }
}
six2El.addEventListener('click', highlight62)
function highlight62(){
    six2El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        six2El.classList.add('remove')
        dice3= 1
        DF3= 6
        
    }
}






//Dice Four






one3El.addEventListener('click', highlight13)
function highlight13(){
    one3El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        one3El.classList.add('remove')
        dice4= 1
        DF4 = 1
        scoreEl = 100
    }
}
two3El.addEventListener('click', highlight23)
function highlight23(){
    two3El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        two3El.classList.add('remove')
        dice4= 1
        DF4 = 2
    }
}
three3El.addEventListener('click', highlight33)
function highlight33(){
    three3El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        three3El.classList.add('remove')
        dice4= 1
        DF4 = 3
    }
}
four3El.addEventListener('click', highlight43)
function highlight43(){
    four3El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        four3El.classList.add('remove')
        dice4= 1
        DF4 = 4
    }
}
five3El.addEventListener('click', highlight53)
function highlight53(){
    five3El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        five3El.classList.add('remove')
        dice4= 1
        DF4 = 5
        scoreEl = 50
    }
}
six3El.addEventListener('click', highlight63)
function highlight63(){
    six3El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        six3El.classList.add('remove')
        dice4= 1
        DF4 = 6
    }
}


 


//Dice Five





one4El.addEventListener('click', highlight14)
function highlight14(){
    one4El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        one4El.classList.add('remove')
        dice5= 1
        scoreEl = 100
    }
}
two4El.addEventListener('click', highlight24)
function highlight24(){
    two4El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        two4El.classList.add('remove')
        dice5= 1
        DF5 = 2
    }
    
}
three4El.addEventListener('click', highlight34)
function highlight34(){
    three4El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        three4El.classList.add('remove')
        dice5= 1
        DF5 = 3
    }
}
four4El.addEventListener('click', highlight44)
function highlight44(){
    four4El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        four4El.classList.add('remove')
        dice5= 1
        DF5 = 4
    }
}
five4El.addEventListener('click', highlight54)
function highlight54(){
    five4El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        five4El.classList.add('remove')
        dice5= 1
        DF5 = 5
        scoreEl = 50
    }
}
six4El.addEventListener('click', highlight64)
function highlight64(){ 
    six4El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        six4El.classList.add('remove')
        dice5= 1
        DF5 = 6
    }
}




//Dice Six





one5El.addEventListener('click', highlight15)
function highlight15(){
    one5El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        one5El.classList.add('remove')
        dice6= 1
        DF6 = 1
        scoreEl = 100
    }
}
two5El.addEventListener('click', highlight25)
function highlight25(){
    two5El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        two5El.classList.add('remove')
        dice6= 1
        DF6 = 2
    }
}
three5El.addEventListener('click', highlight35)
function highlight35(){
    three5El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        three5El.classList.add('remove')
        dice6= 1
        DF6 = 3
    }
    
}
four5El.addEventListener('click', highlight45)
function highlight45(){
    four5El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        four5El.classList.add('remove')
        dice6= 1
        DF6 = 4
    }
}
five5El.addEventListener('click', highlight55)
function highlight55(){
    five5El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        five5El.classList.add('remove')
        dice6= 1
        DF6 = 5
        scoreEl = 50
    }
}
six5El.addEventListener('click', highlight65)
function highlight65(){
    six5El.classList.add('highlight')
    assideButton.addEventListener('click', remove)
    function remove(){
        six5El.classList.add('remove')
        dice6= 1
        DF6 = 6
    }
}






//Remove highlight




document.body,onkeyup = function(e){
    if(e.keyCode == 32){
        oneEl.classList.remove('highlight')
        twoEl.classList.remove('highlight')
        threeEl.classList.remove('highlight')
        fourEl.classList.remove('highlight')
        fiveEl.classList.remove('highlight')
        sixEl.classList.remove('highlight')
        
        one1El.classList.remove('highlight')
        two1El.classList.remove('highlight')
        three1El.classList.remove('highlight')
        four1El.classList.remove('highlight')
        five1El.classList.remove('highlight')
        six1El.classList.remove('highlight')

        one2El.classList.remove('highlight')
        two2El.classList.remove('highlight')
        three2El.classList.remove('highlight')
        four2El.classList.remove('highlight')
        five2El.classList.remove('highlight')
        six2El.classList.remove('highlight')

        one3El.classList.remove('highlight')
        two3El.classList.remove('highlight')
        three3El.classList.remove('highlight')
        four3El.classList.remove('highlight')
        five3El.classList.remove('highlight')
        six3El.classList.remove('highlight')

        one4El.classList.remove('highlight')
        two4El.classList.remove('highlight')
        three4El.classList.remove('highlight')
        four4El.classList.remove('highlight')
        five4El.classList.remove('highlight') 
        six4El.classList.remove('highlight')

    }
}
sixDieButton.addEventListener('click', sixDie)

function sixDie(){
    dice1 = 0
    dice2 = 0
    dice3 = 0
    dice4 = 0
    dice5 = 0
    dice6 = 0
}

calcScore.addEventListener('click', calculate)
function calculate(){
    total= total+scoreEl
    totalScoreEl.innerHTML = total

}
