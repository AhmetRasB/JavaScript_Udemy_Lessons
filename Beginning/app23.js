const TodoInput = document.getElementById("todo");
let element; 

// element = TodoInput.classList;

// TodoInput.classList.add("newClass");
// TodoInput.classList.add("newClass2");
element = TodoInput.placeholder;
TodoInput.setAttribute("placeholder","naber");
TodoInput.setAttribute("title","input");
TodoInput.removeAttribute("name");
element = TodoInput;
// element = TodoInput.hasAttribute("name")
console.log(element);