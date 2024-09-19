// Choosing Id for Elements
let element;

element = document.getElementById("todo-form");

console.log(element);

element = document.getElementById("tasks-title");

console.log(element);
// - Class'a göre seçme

element = document.getElementsByClassName("list-group-item");

console.log(element);

element = document.getElementsByClassName("card-header");

console.log(element);
// - Tag a göre seçme - 

element = document.getElementsByTagName("li");

console.log(element);

element = document.getElementsByTagName("div");

console.log(element);

// Query-Selector Css Selector - Tek bir Element
    element = document.querySelector("#todo-form");
    console.log(element);
    element = document.querySelector("#tasks-title");
    console.log(element);
    element = document.querySelector(".list-group-item");
    console.log(element);
    element = document.querySelector("#tasks-title");
    console.log(element);