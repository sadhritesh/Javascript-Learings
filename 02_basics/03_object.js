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
