// ----------------------------------
    function merhaba(){
       
        console.log("Merhaba");
    }
    merhaba();
// ----------------------------------
    function test(name,age){
        if(typeof name == "undefined") name = "Bilgi Yok";
        if(typeof age == "undefined") age = "Bilgi Yok";
        console.log(`İsim ${name} Yaş ${age}`);
        let ahmet = 12;
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
   
    function square(x){
        console.log(x*x);
    }
    function cube(x){
        console.log(x*x*x);
    }

     let a = square(2);
     let b = cube(square(12));
// ---------------------------------
    const selam = function(name){
        console.log("selam "+ name);
    }
    selam("ahmet");
