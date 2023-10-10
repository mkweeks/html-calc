const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")
const num0 = document.getElementById("num0")
const add = document.getElementById("add")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const subtract = document.getElementById("subtract")
const equals = document.getElementById("equals")
const display = document.getElementById("display")
let value1;

num1.addEventListener("click", ()=>{
    display.value += 1
})

num2.addEventListener("click", ()=>{
    display.value += 2
})

num3.addEventListener("click", ()=>{
    display.value += 3
})

num4.addEventListener("click", ()=>{
    display.value += 4
})

num5.addEventListener("click", ()=>{
    display.value += 5
})

num6.addEventListener("click", ()=>{
    display.value += 6
})

num7.addEventListener("click", ()=>{
    display.value += 7
})

num8.addEventListener("click", ()=>{
    display.value += 8
})

num9.addEventListener("click", ()=>{
    display.value += 9
})

num0.addEventListener("click", ()=>{
    display.value += 0
})

add.addEventListener("click", ()=>{
    display.value +=  " + "
})

equals.addEventListener("click", ()=>{
    value1 = display.value
    display.value = eval(value1)
})

subtract.addEventListener("click", ()=>{
    display.value +=  " - "
})

multiply.addEventListener("click", ()=>{
    display.value +=  " * "
})

divide.addEventListener("click", ()=>{
    display.value += " / "
})