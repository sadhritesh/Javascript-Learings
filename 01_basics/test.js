let str1 = "ritesh";
let str2 = new String("ritesh");

console.log(str1 === "ritesh"); // true
console.log(typeof str1 , typeof "ritesh"); // true
console.log(str2 === "ritesh"); // false
console.log(typeof str2 ,typeof "ritesh"); // true
console.log(str2.valueOf() === "ritesh"); // true
