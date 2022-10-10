/**
 * metodos de recuperação de elementos html(funções)
 */
//recupera elementos html a partir da tag
//const todoForm = document.getElementsByTagName('form')
//console.log(todoForm)

const todoForm =  document.getElementById('todo-form')
const todos = []
 /**
  * addEvent.. serve para ouvir eventos de html sempre que fores emitidos
  */
    todoForm.addEventListener('submit' , function(evento){
    evento.preventDefault()
    evento.stopPropagation()
    
    const todoInput = document.querySelector('#todo')
    todos.push(todoInput.value)
    todoInput.value =  ''
    console.log(todos)
    renderizarTodos()
})

function renderizarTodos() {
    const todoListSection = document.querySelector('#todos-list')
    todoListSection.innerHTML = ''


    for(let tarefa of todos){
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        console.log(divCard)

        const divCarBody = document.createElement('div')
        divCarBody.classList.add('card-body' , 'd-flex' , 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text' , 'flex-grow-1' , 'text-truncate')
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn' , 'delete-todo')
        btnDelete.addEventListener('click' , () => {

        const index = todos.indexOf(tarefa)    

        todos.splice(index, 1)
        renderizarTodos()
        })


        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon)
        divCarBody.appendChild(pTodoText)
        divCarBody.appendChild(btnDelete)
        divCard.appendChild(divCarBody)

        todoListSection.appendChild(divCard)
    }
}
