    let value;
// ------------------------------
    const programmer = {
        name: "Ahmet Rasim Beyhan",
        age: 25,
        email: "ahmet@gmail.com",
        langs:[
            "Python",
            "Java",
            "JavaScript"
        ],
        address : {
            city: "Ontario",
            street: "Bloor"
        },
        work : function(){
            console.log("Programcı Çalışıyor");
        }

    }
// -----------------------------
    value = programmer;
    console.log(value);
    value = programmer.email;
    console.log(value);
    value = programmer.langs;
    console.log(value);
// -----------------------------
    value = programmer.address.city;
    console.log(value);
    value = programmer.langs;
    console.log(value);
// -----------------------------
    const programmers = [
        {name: "Mehmet",age:25,city:"Istanbul"},
        {name:"Oğuz",age:25,street:"Turkey"}
    ];
    value = programmers;
    console.log(value);
