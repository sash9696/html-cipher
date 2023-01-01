
let container = document.querySelector('.container')

let open = document.getElementById('open')
let close = document.getElementById('close')

open.addEventListener('click', function () {
    container.classList.add('show-nav')
})

close.addEventListener('click', function () {
    container.classList.remove('show-nav')
})
