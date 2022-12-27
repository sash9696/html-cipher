
let form = document.getElementById('todoForm')
let input = document.getElementById('input')
let todoList = document.getElementById('todos')


let todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {

    console.log(input.value)
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {

        let li = document.createElement('li')

        if (todo && todo.completed) {
            li.classList.add('completed')
        }

        li.innerText = todoText

        li.addEventListener('click', () => {
            li.classList.toggle('completed')

            updateTodoList()
        })

        li.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            li.remove()
            updateTodoList()
        })

        todoList.append(li)
        input.value = ''
        updateTodoList()
    }

}

function updateTodoList() {
    let todosList = document.querySelectorAll('li')

    let todos = []

    todosList.forEach((todo) => {

        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        })

    })
    //local storage can also store strings
    localStorage.setItem('todos', JSON.stringify(todos))
}
