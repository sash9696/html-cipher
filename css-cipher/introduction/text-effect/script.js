
let textElement = document.getElementById('text')

let inputElement = document.getElementById('speed')

let text = 'I love javascript'
let index = 1
let speed = 400 / inputElement.value

autoText()


function autoText() {
    textElement.innerText = text.slice(0, index)
    index++

    if (index > text.length) {
        index = 1
    }
    setTimeout(autoText, speed)
}