"use strict"

const countElement = document.querySelector('#count')
const btn = document.querySelector('#btn')

let count = +0


function incrementCount() {
    console.log(count)
    return ++count
}

btn.addEventListener('click',incrementCount)
countElement.innerHTML = count
console.log(btn)