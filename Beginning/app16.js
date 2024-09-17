// DOM MANUPLATION
// ----------------------------------------------
    let value;
    value = document;
    console.log(value);
// ----------------------------------------------
    value = document.all;
    console.log(value);
// ----------------------------------------------
    value = document.all.length;
    console.log(value);
// ----------------------------------------------
    value = document.all[0];
    value = document.all[6];
    value = document.all[document.all.length-1];
// ----------------------------------------------
    const elements = document.all;
    elements.forEach(function(element){
        console.log(element);
    });
// ----------------------------------------------