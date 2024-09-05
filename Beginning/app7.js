        let value; 
        var numbers = [32,42,423,234,53,23,32];
        console.log(numbers);
// --------------------------------------
        var numbers2 = new Array(1,2,3,4,5,6,7);
        console.log(numbers2);
// --------------------------------------
        var langs = ["Python","Java","C++","JavaScript"];
        const a = ["Merhaba",22,null,undefined,3.14];
        value = a.length;
        console.log(value);
        value = numbers[0];
        console.log(value);
        value = numbers[1];
        console.log(value);
        value = numbers[6];
        console.log(value);
// --------------------------------------
        a[2] = "Selam";
        console.log(a[2]);
        console.log(a);
// --------------------------------------
        a.push(1000);
        console.log(a);
// --------------------------------------
        a.unshift(3000);
        console.log(a);
// --------------------------------------
        a.pop();
        console.log(a);
// --------------------------------------
        a.shift();
        console.log(a);
// --------------------------------------
        a.reverse();
        console.log(a);
// --------------------------------------
        a.splice(0,3);
        console.log(a);
// --------------------------------------
        a.sort();
        console.log(a); 
// --------------------------------------
        a.sort(function(x,z){
                return x-z;
        });
        console.log(a); 
// --------------------------------------
        a.sort(function(x,y){
                return x-y;
        });
        console.log(a);
