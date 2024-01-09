// ✅Arrary.map(callFun) - map is used to create a new array by transforming each element based on a provided function

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = myArr.map((ele)=>{
//     return ele*3;
// });
// console.log(newArr);
// [
//     3,  6,  9, 12, 15,
//    18, 21, 24, 27, 30
//  ]


//✅method chaining 

const newArr = myArr.map((ele)=> ele+10) // [11, 12, 13, 14, 15,16, 17, 18, 19, 20]
               .map(ele => ele + 1)      // [12, 13, 14, 15, 16,17, 18, 19, 20, 21]
               .filter(ele => ele >= 15); //[15, 16, 17, 18, 19, 20, 21]

console.log(newArr);
//[15, 16, 17, 18, 19, 20, 21]
