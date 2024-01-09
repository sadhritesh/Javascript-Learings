//flasy values 

// false, 0, -0, BigInt, "", null, undefined, Nan


//truthy values 

//true , [], " ", "false", "0", function(){} i.e empty func.


//The Nullish Coalescing Operator (??) : null, undefined 

// It provides a concise way to handle default values for cases where a variable is null or undefined, but not for other falsy values like 0, false, or an empty string.

let a = null ?? 10;
console.log(a);

//It different from from ternary operator 

// conditon ? true_statement : false_statement

let b = 12

b == 12 ? console.log("Yes!!") : console.log("No!!");

let x = 19
let y = 34

let c = x > y ? x : y
console.log(c);//34