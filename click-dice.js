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

        // one2El.classList.remove('highlight')
        // two2El.classList.remove('highlight')
        // three2El.classList.remove('highlight')
        // four2El.classList.remove('highlight')
        // five2El.classList.remove('highlight')
        // six2El.classList.remove('highlight')

        // one3El.classList.remove('highlight')
        // two3El.classList.remove('highlight')
        // three3El.classList.remove('highlight')
        // four3El.classList.remove('highlight')
        // five3El.classList.remove('highlight')
        // six3El.classList.remove('highlight')

        // one4El.classList.remove('highlight')
        // two4El.classList.remove('highlight')
        // three4El.classList.remove('highlight')
        // four4El.classList.remove('highlight')
        // five4El.classList.remove('highlight') 
        // six4El.classList.remove('highlight')








    }
}