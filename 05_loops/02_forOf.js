// ✅for-of loop

// for-of can be used with iterable objects only like Array, map, string etc

fruits = ["Apple", "Mango", "Banana", "Lithchi", "kela", "stawberry", "cherry"];

for (const fruit of fruits) {
    // console.log(fruit);
}

const myName = "Ritesh Sadh";

for (const char of myName) {
    // console.log(char);
}

//Map 

const map = new Map();

map.set(1,"apple")
map.set(2,"mango")
map.set(3,"cherry")

// console.log(map);

// console.log(map.get(1)); //apple

for (const element of map) {
    // console.log(element);
}
// [ 1, 'apple' ]
// [ 2, 'mango' ]
// [ 3, 'cherry' ]

for (const [key, value] of map) {
    console.log(`${key} => ${value}`);
}
// 1 => apple
// 2 => mango
// 3 => cherry