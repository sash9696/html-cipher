
let boxes = document.querySelectorAll('.box')
// let boxes = document.getElementsByClassName('box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    let triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach((box) => {

        let boxTop = box.getBoundingClientRect().top
        console.log('boxTop', boxTop)
        console.log('triggerBottom', triggerBottom)

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }

    })

}