let items = []

let form = document.getElementById('todoForm')
let todoInput = form.querySelector('input')
let listsContainer = document.querySelector('.lists-container')
const storageKey = 'items'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  renderItems()
})

function renderItems() {
  listsContainer.innerHTML = ''

  for (const [idx, item] of Object.entries(items)) {
    let todoList = document.createElement('li')
    todoList.textContent = item

    let removeButton = document.createElement('button')
    removeButton.classList.add('delete-btn')
    removeButton.textContent = 'Delete'
    removeButton.onclick = () => removeItem(idx)

    listsContainer.appendChild(todoList)
    todoList.appendChild(removeButton)
  }
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey)
  if (oldItems) items = JSON.parse(oldItems)
  renderItems()
}

function saveItems() {
  const stringItems = JSON.stringify(items)
  localStorage.setItem(storageKey, stringItems)
}

function addItem() {
  const value = todoInput.value
  if (!value) {
    alert('You need to enter your todo first.')
    return
  }

  items.push(value)
  renderItems()
  todoInput.value = ''
  saveItems()
}

function removeItem(idx) {
  items.splice(idx, 1)
  renderItems()
  saveItems()
}

document.addEventListener('DOMContentLoaded', loadItems)
