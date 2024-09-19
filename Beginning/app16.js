// // DOM MANUPLATION
// // ----------------------------------------------
       let value;
//     value = document;
//     console.log(value);
// // ----------------------------------------------
//     value = document.all;
//     console.log(value);
// // ----------------------------------------------
//     value = document.all.length;
//     console.log(value);
// // ----------------------------------------------
//     value = document.all[0];
//     value = document.all[6];
//     value = document.all[document.all.length-1];
// // ----------------------------------------------
//     // const elements = document.all;
//     // elements.forEach(function(element){
//     //     console.log(element);
//     // });
// // ----------------------------------------------
//     const collections = Array.from(document.all);
//     collections.forEach(function(collection){
//         console.log(collection);
//     });
// // ----------------------------------------------
    value = document.links;
    value = document.links[0];
    value = document.links[document.links.length-1];
    value = document.links[document.links.length-1].getAttribute("class");
    value = document.links[document.links.length-1].getAttribute("href");
    value = document.links[document.links.length].className;
    value = document.links[document.links.length].classList;
    
    console.log(value);

    