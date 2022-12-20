
// console.log(document.URL)

// document.title = 'DOM Manipulation'
// let body = document.body
// let div = document.createElement('div')
// to add text 
// div.innerText = 'THis is a div'
// div.textContent = 'This is a div'

// div.innerText = '<strong>This is a div </strong>'

// let strong = document.createElement('strong')
// strong.innerText = 'THis is a div'
// div.appendChild(strong)

// div.innerHTML = '<strong>This is a div </strong>'

//to add an element
// body.append(div)
// body.appendChild(div)

//remove elements

// body.removeChild(div)


//select the elements from dom

let spanHello = document.getElementById('hello')
let spanBye = document.getElementById('bye')

// spanHello.classList.add('new')
// spanHello.classList.remove('a')
// spanHello.classList.toggle('b')
// spanBye.setAttribute('id', 'abc')
// spanBye.id = 'newId'

spanHello.style.color = 'green'
spanBye.style.backgroundColor = 'tomato'