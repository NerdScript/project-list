var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var Todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (Todo of Todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(Todo);
        
        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');

        var pos = Todos.indexOf(Todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');


        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos();
saveToStorage();

function addTodo() {
    var todoText = inputElement.value;

    Todos.push(todoText + ' ');
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    Todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    JSON
    localStorage.setItem('list_todos', JSON.stringify(Todos));
}