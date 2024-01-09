//✅Objects part 2 
/*
let obj1 = new Object();
console.log(obj1); //{}

let obj2 = {};
console.log(obj2); //{}

*/

//how to add two objects 

let obj1 = {
    1 : "a",
    2 : "b"
}

let obj2 = {
    2 : "Z",
    3 : "c",
    4 : "d"
}
/*
let obj3 = {obj1,obj2};
console.log(obj3);
output:
{
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '2': 'Z', '3': 'c', '4': 'd' }
  }



//✅using Object.assign(target,source1,source2,...)

let obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
output:
{ '1': 'a', '2': 'Z', '3': 'c', '4': 'd' }


let obj3 = {...obj1, ...obj2};
console.log(obj3);
{ '1': 'a', '2': 'Z', '3': 'c', '4': 'd' }


*/


// ✅De-structuring of objects : 
// Destructuring assignment is a feature in some programming languages that allows you to extract values from arrays or objects and assign them to variables in a more concise and convenient way 

let user = {
    firstName : "ritesh sadh",
    companyName : "Google",
    empId : 141,
    age : 22 
};

// let {firstName, companyName} = user 

// console.log(firstName,companyName); ritesh sadh Google


// let {firstName: name, companyName: cName} = user;
// console.log(name, cName);  ritesh sadh Google