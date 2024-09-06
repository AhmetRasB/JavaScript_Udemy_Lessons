// -------------------------------------------
    const process = 2;
    switch(process){
        case 1:
            console.log("İşlem 1");
            break;
        case 2:
            console.log("İşlem 2");
            break;
        default:
            console.log("Geçersiz İşlem");
    }
// ------------------------------------------
    const expr = 'Papayas';
    switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
// ------------------------------------------
    const foo = -1;
    switch (foo) {
    case -1:
        console.log("negative 1");
        break;
    case 0: 
        console.log(0);
        // we dont have a break !!! same time case 0 and 1 works!
    case 1: 
        console.log(1);
        break; 
    case 2:
        console.log(2);
        break;
    default:
        console.log("default");
    }
   
