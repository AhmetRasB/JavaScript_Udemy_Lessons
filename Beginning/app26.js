// // localStorage.setItem("tekrar","burpee");
//
// const value = localStorage.getItem("haraket");
// console.log(value);
// console.log(typeof value);
// localStorage.clear();
//
// localStorage.setItem("haraket","burpee");
// localStorage.setItem("tekrar","50");
// if(localStorage.getItem("sport") === null){
//     console.log("Yok");
// }
// else  
//     console.log(sessionStorage.getItem(value));
//
// const todos = ["Todo 1", "Todo 2", "Todo 3"];
//
// // localStorage.setItem("todos",JSON.stringify(todos));
//
// const value =  JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);
function addTodo(e){
    const value = todoInput.value;
    
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    
    
    
    
    e.preventDefault();
}