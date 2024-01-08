//✅Date Object 

let currentDate = new Date();
// console.log(currentDate);  2024-01-08T09:45:05.215Z
// console.log(Date.now());  1704707105220


let day = new Date(2024, 0, 19, 15, 23);
// console.log(day.getDate()); //8
let a = day.getDay();
// 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on
let Days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
console.log(a)
console.log(`Day on date ${day.getDate()} is : ${Days[a]}`) //friday