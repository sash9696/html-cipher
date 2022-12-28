let leftSection = document.querySelector('.left-section')

let rightSection = document.querySelector('.right-section')

let container = document.querySelector('.container')


leftSection.addEventListener('mouseenter', function () {
    container.classList.add('move-left')
})
leftSection.addEventListener('mouseleave', function () {
    container.classList.remove('move-left')

})


rightSection.addEventListener('mouseenter', function () {
    container.classList.add('move-right')

})
rightSection.addEventListener('mouseleave', function () {
    container.classList.remove('move-right')

})

