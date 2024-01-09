// ✅Functions 

/*✅Undefined : When variable is declared but no value is assigned to variable , then by default it takes undefined value .
  -> When function does not return anything and we are trying to print it then its ouput will be undefined 
  ->when we are trying the property of object or value of array by using non-existing key or index 
*/

/*✅null : null is explicitly assigned by programmer
 */

// ✅Functions 

/*
way-1
fucntion functionName(para1, para2){
    .....
}

way-2
let variableName = fucntion(para1, para2){
    .....
}
*/

// ✅Scope in JS :

/* GLobal Scope - variable available in the whole program. 
   Local Scope - variable available inside a block i.e {...}.
*/

// ✅ Hoisting 

addOne(5);  //6

function addOne(num){
    console.log(num+1);
}

// addOne(5)  -->6

/*----------------------------------------------------------------------*/

// addTwo(7) //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num){
    console.log(num+2);
}

// addTwo(7)  --> 9 