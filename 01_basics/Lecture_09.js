// ✅String Js 

/*
We can declare string in javascript in two ways:

1-> let a = "rietshSadh";  --> primitive string 

2-> let b = new String("RiteshSAdh"); --> string object // js automatically convert primitive datatype into Object when needed

JavaScript is a prototype-based language , and it doesn't have traditional classes in the way that languages like Java or C++ do.
The String in new String() refers to the built-in String constructor function, not a class. When you use the new keyword with a constructor function, it creates and returns a new instance of that function's object type.



✅Prototype - 
In JavaScript, every object is linked to a prototype object from which it inherits properties and methods. The term "prototype" refers to this underlying mechanism that allows objects to inherit features from other objects. Each object in JavaScript has a prototype, except for the base object, which is the prototype of all objects.

*/

/*
✅String Methods :- 

Read from the mdn 

✅slice(start,end)

*/

let a = "Ritesh Sadh , the future Billionaire";
console.log(a.slice(undefined,5)); // Rites 
console.log(a.slice(undefined,undefined));  //Ritesh Sadh , the future Billionaire

console.log(a.slice(-2,1)); // empty string 
console.log(a.slice(-10,-1)); //illionair