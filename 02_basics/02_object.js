//Singleton object -> object.create();



//Object literals : 

//create symbol key of object - read it in the last 
let empId = Symbol("empId");

let user = {
    name : "Ritesh Sadh",
    phNumber : 7024344659, 
    [empId] : 171,
    companyName : "Google",
    email : "sadhritesh32@gmail.com",
    "isLogined" : true
};

console.log(user["isLogined"]); //only way to acces the value defibed with string key 

//access key (creted by symbol)
// console.log(user.empId); //no working 
console.log(user[empId]); //171

//Two ways to access value from object 
console.log(user.name);
console.log(user["name"]);

//Add values to objects.

// user[age] = 22;  //Error
user["age"] = 22;
user.isActive = false;


console.log(user["age"]);
console.log(user["isActive"]);

user.greeting = function(){
    console.log("Jey User goodmoring");
}

console.log(user.greeting); //[Function (anonymous)]
user.greeting(); //Jey User goodmoring
console.log(user);
/*{
    name: 'Ritesh Sadh',
    phNumber: 7024344659,
    companyName: 'Google',
    email: 'sadhritesh32@gmail.com',
    isLogined: true,
    age: 22,
    isActive: false,
    greeting: [Function (anonymous)],
    [Symbol(empId)]: 171
  }*/