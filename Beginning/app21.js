// const element = document.querySelector("#clear-todos");
// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "5px";
// element.href = "https://www.google.com";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML= "<span style = 'color:#b9bbb9'>Silin</span>";
// console.log(element);
// console.log(element.textContent);
// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function (el){
//    el.style.color = "red";
//    el.style.background = "#eee";
// });
// console.log(elements);
// let element = document.querySelector("li:nth-child(2)");
//  element = document.querySelector("li:nth-child(3)");
//  element = document.querySelector("li:nth-child(4)");
//  element = document.querySelectorAll("li:nth-child(odd)");
//  element = document.querySelectorAll("li:nth-child(even)");
// console.log(element);
const newlink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newlink.id = "clear-todos";
newlink.className = "btn btn-danger";
newlink.href = "https://google.com";
newlink.target = "_blank";
newlink.textContent = "Farklı Sayfaya Git";
const text = document.createTextNode("Naber");
cardbody.appendChild(text);
newlink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newlink);
console.log(cardbody);
console.log(newlink);

