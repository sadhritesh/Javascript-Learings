// Datatype consversion in JS
const a = 12;

// console.log(typeof a);
// console.log(typeof(a));

const b = null;

let new_b = Number(b);
// console.log(new_b);=>0
// console.log(typeof new_b);=>number


const c  = undefined;

let new_c = Number(c);
// console.log(new_c);  => Nan i.e Not a Number
// console.log(typeof new_c); => number 


const d = "33";
const e = "33asd";

// console.log(Number(d)); => 33
// console.log(Number(e)); => Nan



//Number to boolean 
// 1 => true , 0 => false 


//String to boolean
// "" => false , "ritesh" => true 