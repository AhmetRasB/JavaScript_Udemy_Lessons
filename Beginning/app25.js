
// Choosing Buttons
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Choosing Inputs

const addKey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
add.addEventListener("click",deleteItem);
add.addEventListener("click",clearItem);
function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}
function deleteItem(e){}
function clearItem(es){
    
}