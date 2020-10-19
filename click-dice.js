//Dice One
oneEl.addEventListener('click', highlight1)
function highlight1(){
    oneEl.classList.add('highlight')
}
twoEl.addEventListener('click', highlight2)
function highlight2(){
    twoEl.classList.add('highlight')
}
threeEl.addEventListener('click', highlight3)
function highlight3(){
    threeEl.classList.add('highlight')
}
fourEl.addEventListener('click', highlight4)
function highlight4(){
    fourEl.classList.add('highlight')
}
fiveEl.addEventListener('click', highlight5)
function highlight5(){
    fiveEl.classList.add('highlight')
}
sixEl.addEventListener('click', highlight6)
function highlight6(){
    sixEl.classList.add('highlight')
}



//Dice Two
one1El.addEventListener('click', highlight11)
function highlight11(){
    one1El.classList.add('highlight')
}
two1El.addEventListener('click', highlight21)
function highlight21(){
    two1El.classList.add('highlight')
}
three1El.addEventListener('click', highlight31)
function highlight31(){
    three1El.classList.add('highlight')
}
four1El.addEventListener('click', highlight41)
function highlight41(){
    four1El.classList.add('highlight')
}
five1El.addEventListener('click', highlight51)
function highlight51(){
    five1El.classList.add('highlight')
}
six1El.addEventListener('click', highlight61)
function highlight61(){
    six1El.classList.add('highlight')
}



//Dice Three
one2El.addEventListener('click', highlight12)
function highlight12(){
    one2El.classList.add('highlight')
}
two2El.addEventListener('click', highlight22)
function highlight22(){
    two2El.classList.add('highlight')
}
three2El.addEventListener('click', highlight32)
function highlight32(){
    three2El.classList.add('highlight')
}
four2El.addEventListener('click', highlight42)
function highlight42(){
    four2El.classList.add('highlight')
}
five2El.addEventListener('click', highlight52)
function highlight52(){
    five2El.classList.add('highlight')
}
six2El.addEventListener('click', highlight62)
function highlight62(){
    six2El.classList.add('highlight')
}



//dice Four
one3El.addEventListener('click', highlight13)
function highlight13(){
    oneEl.classList.add('highlight')
}
two3El.addEventListener('click', highlight23)
function highlight23(){
    two3El.classList.add('highlight')
}
three3El.addEventListener('click', highlight33)
function highlight33(){
    three3El.classList.add('highlight')
}
four3El.addEventListener('click', highlight43)
function highlight43(){
    four3El.classList.add('highlight')
}
five3El.addEventListener('click', highlight53)
function highlight53(){
    five3El.classList.add('highlight')
}
six3El.addEventListener('click', highlight63)
function highlight63(){
    six3El.classList.add('highlight')
}
//Dice Five
one4El.addEventListener('click', highlight14)
function highlight14(){
    one4El.classList.add('highlight')
}
two4El.addEventListener('click', highlight24)
function highlight24(){
    two4El.classList.add('highlight')
}
three4El.addEventListener('click', highlight34)
function highlight34(){
    three4El.classList.add('highlight')
}
four4El.addEventListener('click', highlight44)
function highlight44(){
    four4El.classList.add('highlight')
}
five4El.addEventListener('click', highlight54)
function highlight54(){
    five4El.classList.add('highlight')
}
six4El.addEventListener('click', highlight64)
function highlight64(){
    six4El.classList.add('highlight')
}
//Dice Six


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