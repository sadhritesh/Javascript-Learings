//✅for-In loop - Used with object and array

const user = {
    name : "Ritesh Sadh", 
    age : 22,
    emp_id : 141,
    comapnay : "Google"
}

for (const key in user) {
    // console.log(key);
}
// name
// age
// emp_id
// comapnay

for (const key in user) {
    // console.log(user[key]);
}
// Ritesh Sadh
// 22
// 141
// Google

const myArray = [100, 122, 313];

// Adding a string property to the array
myArray["name"] = 'example';


for (const key in myArray) {
    // console.log(myArray[key]);
}
// 100
// 122
// 313
// example