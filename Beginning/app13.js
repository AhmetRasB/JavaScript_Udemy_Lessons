// -----------------------------------------------
    const langs = ["Python","JavaScript","Java"];
    langs.forEach(function(langs){
        console.log(langs);
    });
// -----------------------------------------------
    const users = [
        {name:"Mustafa",age:25},
        {name:"Zeynep",age:15},
        {name:"Zeliha",age:16},
    ];
    const names = users.map(function(user){
        return users.name;
    });
    console.log(names);
    console.log(users);

// ----------------------------------------------
    const user = {
        name:"Mustafa",
        age:25
    };
    for(let key in user){
        console.log(key,user[key]);
    }
// ----------------------------------------------
