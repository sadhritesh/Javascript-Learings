/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/


let month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break
    case 4:
        console.log("april");
        break;

    default:
        console.log("Default case");
        break;
}

//case 3 me break statement nhi hota to case 3 ke excute hone ke badd uske niche  ke sabhi cases execute hote (include default case)


switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");

    case 4:
        console.log("april");

    default:
        console.log("Default case");
        break;
}