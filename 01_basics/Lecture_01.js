/*In the early days of JavaScript, there was only one way of declaring variables and that was using the "var" keyword. A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block. 

With the introduction of ES6 in 2015 two more keywords, let and const came into the picture. var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.*/

//var is function scoped and let is block scoped.
//Prefer not to use var because of its finctional scope

function example(){
    var a = 10;
    var c = 11
    if (true){
        var a = 19;
        // a new peogrammer comes and redecalre 'a' and change its value , then its value will be chnaged i nthe whole program
        console.log(c);
        var b = 12;
    }
    console.log(b);
    console.log(a);
    //accessible outside the if block
}
example();
// console.log(a)
//not accessible outside the functional scope

function example1(){
    let a = 10;
    if (true){
        let a = 12
        console.log(a);
        let b = 12;
    }
    // console.log(b);
    //not accesible outside the if block
}

example1();
// console.log(a)
//not accessible outside the funcitonal scope 


let a = 12 ;
const name = 'RItesh';
let roll = 12;

console.log([a,name,roll]);

