
let colors = ['green', 'red', 'pink', 'blue', 'grey']

let body = document.body

let btn = document.getElementById('btn')
let color = document.getElementById('color')

btn.addEventListener('click', function () {
    let randomNumber = getRandomNumber()

    body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
