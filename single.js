let num1 = document.querySelector('.num-1')
let num2 = document.querySelector('.num-2')
let choice= document.querySelector('.choice')
let choice1= document.querySelector('.choice1 ')
let choice2= document.querySelector('.choice2 ')
let choice3= document.querySelector('.choice3 ')
let choice4= document.querySelector('.choice4 ')
let choice5= document.querySelector('.choice5 ')
let answer = document.querySelector('.answer')
let btn = document.querySelector(".btn")
let close = document.querySelector(".close")
let numX = document.querySelectorAll(".x")
let numZ = document.querySelectorAll(".z")
let arrX = Array.prototype.slice.call(numX)
let arrZ = Array.prototype.slice.call(numZ)


function open(){
    document.body.classList += ' open';
}

function closed(){
    document.body.classList -= " open";
}


btn.addEventListener('click', () => {
    open()
})

close.addEventListener('click', () => {
    closed()
})




function add(){
    let x = Math.floor(Math.random()*10)
    num1.innerHTML= x
    arrX.forEach((e)=>{
        e.innerHTML = x
    })
    let y = Math.floor(Math.random()*10)
    num2.innerHTML= y
    let z = x * y
    count = 0
    arrZ.forEach((e)=>{
        e.innerHTML = x*count
        count += 1
    })
    answer.innerHTML = z
    console.log(z)
    let a = z - x
    let b = z - y
    let c = z + x
    let d = z + y
    if( x == y){
        b = z - (2*y)
        d = z + (2*y)
   }else if (x == 0 || y == 0){
        a = z + 1
        b = z + 2
        c = z + 3
        d = z + 4    
   }
    let arr = [a , b, c, d, z]
    arr.sort((a,b)=>Math.random()-0.5)
    choice1.innerHTML = arr[0]   
    choice2.innerHTML = arr[1]
    choice3.innerHTML = arr[2]
    choice4.innerHTML = arr[3]
    choice5.innerHTML = arr[4]
    return z
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


