// ---------------------
    let value;
    const firstname = "Lois";
    const lastName = "Armstrong";
    const langs = "Java,Python,C++";
    value = firstname + " " + lastName;
    console.log(value);
   
// ---------------------------
    value = "Ahmet Rasim";
    value = value + " Beyhan";
    console.log(value);
    value = "Ahmet Rasim";
    value += " Beyhan";
    console.log(value);

// ---------------------------
    value = firstname.concat(" ",lastName," ","Caz");
    console.log(value);
// ---------------------------
    value = firstname.toLowerCase();
    console.log(value);
// ---------------------------
    value = firstname.toUpperCase();
    console.log(value);
// ---------------------------
    value = firstname[0];
    console.log(value);
    value = firstname[1];
    console.log(value);
    value = firstname[2];
    console.log(value);
    value = firstname[3];
    console.log(value);
// ---------------------------
    value = firstname.indexOf("L");
    console.log(value);
    value = firstname.indexOf("o");
    console.log(value);
    value = firstname.indexOf("z");
    console.log(value);
// ---------------------------
    value = firstname.charAt(0);
    console.log(value);
    value = firstname.charAt(1);
    console.log(value);
    value = firstname.charAt(2);
    console.log(value);
    value = firstname.charAt(3);
    console.log(value);
// ---------------------------
    value = langs.split(",");
    console.log(value)
// ---------------------------
    value = langs.replace("Python","Css");
    console.log(value);
    console.log(langs);
// ---------------------------
    value = langs.includes("Java");
    console.log(value);
    console.log(typeof value);
// ---------------------------
