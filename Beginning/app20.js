let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");
value = todoList;
value = todo;
value = cardrow;
// Child Nodes
value = todoList.childNodes;
value = todoList.childNodes[2];
//value = todoList.children;
//value = todoList.children[1];


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;
value = todoList.children[1].parentElement;
value = todo.previousElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.previousElementSibling;
console.log(value);