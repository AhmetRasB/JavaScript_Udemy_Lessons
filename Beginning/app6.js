    const name = "Ahmet Rasim Beyhan";
    const department = "Development";
    const salary = 4000;
// -------------------------------
    var a = "İsim : " + name + "\n" + "Departman : " + department + "\n" + "Maaş : " + salary;
    console.log(a);
// -------------------------------
    var a = `İsim : ${name}\nDepartment : ${department}\nSalary : ${salary}`;
    console.log(a);
// -------------------------------
    const html = "<ul>" + 
                    "<li>" + name + "</li>" + 
                    "<li>" + department + "</li>" + 
                    "<li>" + salary + "</li>" + 
                    "</ul>";
    document.body.innerHTML = html;
// --------------------------------
function x(){
    return "Merhaba";
}
    const httm = `
        <ul>
        <li>${name}</li>  
        <li>${salary}</li>  
        <li>${department}</li>  
        <li>${10/4}</li>  
        <li>${x()}</li>
        </ul>
    `
    document.body.innerHTML = httm;