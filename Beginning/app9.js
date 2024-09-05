    let value;
    console.log(value);
// --------------------
    const now = new Date()
    console.log(now);
// --------------------
    const date1 = new Date("9-10-1993 06:15:00");
    console.log(date1);
// --------------------
    const date2 = new Date("October 19 1985");
    console.log(date2);
// --------------------
    const date3 = new Date("2/21/1883");
    console.log(date3);
// -------------------- 
    value = date1;
    value = date1.getMonth();
    console.log(value);
    value = date2;
    value = date2.getMonth();
    console.log(value);
    value = date3;
    value = date3.getMonth();
    console.log(value);
// -------------------
    value = date1.getHours();
    console.log(value);
    value = date1.getMinutes();
    console.log(value);
    value = date1.getSeconds();
    console.log(value);
// -------------------
    value = date2.getMilliseconds();
    console.log(value);
// -------------------
    value = date1;
    console.log(value);
    date1.setMonth(7);
    date1.setDate(15);
    date1.setFullYear(1994);
    console.log(value);
// -------------------