// ----------------------------------
    function merhaba(){
       
        console.log("Merhaba");
    }
    merhaba();
// ----------------------------------
    function test(name,age){
        if(typeof name === "undefined") name = "Bilgi Yok";
        if(typeof age === "undefined") age = "Bilgi Yok";
        console.log(`İsim ${name} Yaş ${age}`);
    }
    test("ahmet",25);
    test("mehmet",20);
    test();
// ----------------------------------
    function test2(name2 = "Bilgi Yok",age2 = "Bilgi Yok"){
        console.log(`İsim ${name2} Yaş ${age2}`);
    }
    test2("ahmet",25);
    test2("mehmet",20);
    test2();
    test2("Kadir");

// ---------------------------------
