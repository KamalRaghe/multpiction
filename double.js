let num1 = document.querySelector('.num-1')
let num2 = document.querySelector('.num-2')
let number1 = document.querySelector('.number1')
let number2 = document.querySelector('.number2')
let nu1 = document.querySelector('.nu-1')
let nu2 = document.querySelector('.nu-2')
let choice= document.querySelector('.choice')
let choice1= document.querySelector('.choice1 ')
let choice2= document.querySelector('.choice2 ')
let choice3= document.querySelector('.choice3 ')
let choice4= document.querySelector('.choice4 ')
let choice5= document.querySelector('.choice5 ')
let ch1= document.querySelector('.ch1 ')
let ch2= document.querySelector('.ch2 ')
let ch3= document.querySelector('.ch3 ')
let answer = document.querySelector('.answer')
let answer1 = document.querySelector('.answer1')
let btn = document.querySelector(".btn")
let close = document.querySelector(".close")
let boxRed = document.querySelectorAll(".box-red")
let boxOrange = document.querySelectorAll(".box-orange")
let arrOrange = Array.prototype.slice.call(boxOrange)
let arrRed = Array.prototype.slice.call(boxRed)

function open(){
    document.body.classList += ' open';
}

function closed(){
    document.body.classList -= " open";
}

btn.addEventListener('click', () => {
    open()
    minAdd()
})

close.addEventListener('click', () => {
    closed()
})

function minAdd2(){
    number1.innerHTML = nu1.innerHTML[0]
    number2.innerHTML = nu2.innerHTML[1]
    let m = Number(number1.innerHTML) + Number(number2.innerHTML)
    let n = m - 2
    let p = m + 1
    let arr = [m , n, p]
    arr.sort((a,b)=>Math.random()-0.5)
    ch1.innerHTML = arr[0]   
    ch2.innerHTML = arr[1]
    ch3.innerHTML = arr[2]
     return m 
}

function minAdd(){
    number1.innerHTML = nu1.innerHTML[1]
    number2.innerHTML = nu2.innerHTML[2]
    let m = Number(number1.innerHTML) + Number(number2.innerHTML)
    answer1.innerHTML = m
    let n = m - 2
    let p = m + 1
    let arr = [m , n, p]
    arr.sort((a,b)=>Math.random()-0.5)
    ch1.innerHTML = arr[0]   
    ch2.innerHTML = arr[1]
    ch3.innerHTML = arr[2]
    return m
}

ch1.addEventListener('click', () => {
    if(ch1.innerHTML == answer1.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'
    }

    setTimeout(colorSwitch,2500)
    setTimeout(minAdd2,2500)

})

ch2.addEventListener('click', () => {
    if(ch2.innerHTML == answer1.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'
    }
    setTimeout(colorSwitch,2500)
    setTimeout(minAdd2,2500)


})

ch3.addEventListener('click', () => {
    if(ch3.innerHTML == answer1.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'
    }
    setTimeout(colorSwitch,2500)
    setTimeout(minAdd2,2500)


})


function add(){
    let x = Math.floor((Math.random()*90)+10)
    num1.innerHTML= x
    nu1.innerHTML= x
    let y = Math.floor((Math.random()*90)+10)
    num2.innerHTML= '+'+ y
    nu2.innerHTML= '+'+ y
    z = x + y
    answer.innerHTML = z
    let e =  z - 10
    let f = z - 1
    let g = z  + 1
    let h = z + 10
    let arr = [e , f, g, h, z]
    arr.sort((a,b)=>Math.random()-0.5)
    choice1.innerHTML = arr[0]   
    choice2.innerHTML = arr[1]
    choice3.innerHTML = arr[2]
    choice4.innerHTML = arr[3]
    choice5.innerHTML = arr[4]
}


function colorSwitch(){
    document.body.classList -= ' correct'
    document.body.classList -= ' wrong'
}

choice1.addEventListener('click', () => {
    if(choice1.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'
    }
    setTimeout(add,2500)
    setTimeout(colorSwitch,2500)

})

choice2.addEventListener('click', () => {
    if(choice2.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(add,2500)
    setTimeout(colorSwitch,2500)
    
})

choice3.addEventListener('click', () => {
    if(choice3.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(add,2500)
    setTimeout(colorSwitch,2500)
})

choice4.addEventListener('click', () => {
    if(choice4.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(add,2500)
    setTimeout(colorSwitch,2500)

})

choice5.addEventListener('click', () => {
    if(choice5.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(add,2500)
    setTimeout(colorSwitch,2500)

})


