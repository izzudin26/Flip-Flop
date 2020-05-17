let btn = document.querySelector("#button")
let val1 = document.querySelector("#val1")
let val2 = document.querySelector("#val2")
let val3 = document.querySelector("#val3")
let val4 = document.querySelector("#val4")
let gate = document.querySelector("#gate")
let incrementbtn1 = document.querySelector("#increment1")
let incrementbtn2 = document.querySelector("#increment2")
let incrementbtn3 = document.querySelector("#increment3")
let incrementbtn4 = document.querySelector("#increment4")
let decrementbtn1 = document.querySelector("#decrement1")
let decrementbtn2 = document.querySelector("#decrement2")
let decrementbtn3 = document.querySelector("#decrement3")
let decrementbtn4 = document.querySelector("#decrement4")

const increment = (textbox) => {
    if(textbox.value == 0){
        textbox.value = 1
    }
}

const decrement = (textbox) => {
    if(textbox.value > 0){
        textbox.value = 0
    }
}

incrementbtn1.addEventListener("click", () => {
    return increment(val1)
})

decrementbtn1.addEventListener("click", () => {
    return decrement(val1)
})

incrementbtn2.addEventListener("click", () => {
    return increment(val2)
})

decrementbtn2.addEventListener("click", () => {
    return decrement(val2)
})

incrementbtn3.addEventListener("click", () => {
    return increment(val3)
})

decrementbtn3.addEventListener("click", () => {
    return decrement(val3)
})

incrementbtn4.addEventListener("click", () => {
    return increment(val4)
})

decrementbtn4.addEventListener("click", () => {
    return decrement(val4)
})

btn.addEventListener("click", () => {
    switch(gate.value){
        case "flip1":
            return resultFlip1(val1.value, val2.value, val3.value, val4.value)
        break

        case "flip2":
           return resultFlip2(val1.value, val2.value, val3.value, val4.value)
        break

    }
})