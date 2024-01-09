// ✅ array.map(callback, initialvalue)

const myArr = [1, 2, 3, 4, 5];

// const initialSum = 0;
// const totalSum = myArr.reduce(function(accumulator, currentValue){
//     return (accumulator + currentValue);
// },initialSum);

// console.log(totalSum); //15

// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.

const initialSum = 0;
const totalSum = myArr.reduce((acc, currVal) => acc + currVal, initialSum)

// console.log(totalSum); //15


const shoppingCart = [
    {
        courseName : "js course",
        price : 12000
    },
    {
        courseName : "py course",
        price : 11900
    },
    {
        courseName : "cpp course",
        price : 5000
    },
    {
        courseName : "mobile development course",
        price : 15000
    }
];

const intitialPrice = 0;
const totalPrice = shoppingCart.reduce( (acc, currVal) => acc + currVal.price, intitialPrice );

console.log(totalPrice);