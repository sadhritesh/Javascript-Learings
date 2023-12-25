/*JavaScript is a dynamically-typed language, which means that variables are not explicitly bound to a data type. Instead, the data type of a variable is determined at runtime. JavaScript has several basic data types, which can be categorized into two main 


groups: primitive types and object types. 

@Primitive Data Types:

1.Number:Represents numeric values, both integers and floating-point numbers.
2.String:Represents sequences of characters (text).
3.Boolean:Represents a logical entity and can have two values: true or false.
4.Undefined: Represents an uninitialized variable or a function with no return value.
5.Null:Represents the intentional absence of any object value.
6.Symbol:Introduced in ECMAScript 6 (ES6), symbols are unique and immutable data types, often used as identifiers for object properties. 
let sym = Symbol("uniqueSymbol");


@Object Types:

1.Object:A compound data type that can hold key-value pairs
2.Array:A special type of object that holds an ordered list of values.
3.function :A reusable block of code that can be called with different arguments.
4.Date:Represents dates and times.

typeof is used to check the data type of variable
*/
var a = 12;
console.log(typeof a); // number

//Note datatype of null is object but the datatype of undefined is undefined