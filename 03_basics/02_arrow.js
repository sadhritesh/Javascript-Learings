// ✅"this" keyword -> give refrence of current context

const user = {
    name : "Ritesh Sadh",
    age : 21,
    greeting : function(){
        console.log(`${this.name} , Goodmoring !!`)
        console.log(this);
    }
}

user.greeting();
//Ritesh Sadh , Goodmoring !!
user.name = "sarvesh sadh";
user.greeting();

//✅ console.log(this) --> {} , in node environment 

//✅ console.log(this) --> window object , in console of browser

// ✅ Arrow Function 
/*
const add = (num1, num2) => {
    return (num1 + num2);
    //explicit return 
}

console.log(add(3, 4)); //7 
*/



//if return statement is of single line then 

const add = (num1, num2) => (num1+num2); //implicit return

console.log(add(3, 4));

