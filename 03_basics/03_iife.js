//✅Immediately Invoked function Expression 
/*
->An Immediately Invoked Function Expression (IIFE) is a JavaScript design pattern that involves defining and executing a function immediately after its creation. 
->This pattern is often used to create a private scope for variables, preventing them from polluting the global scope.
*/
//(...)()

//Named IIFE
(function greeting(){
    console.log("Goomoring !!");
})();

//Unnamed IIFE 
let sum = ((num1, num2)=>{
    return (num1+num2);
})(3, 4);

console.log(sum)

//More usefull in EC5 with 'var' because of its functional scoped nature , developers often used IIFE to encapsulate variables within a function, preventing them from polluting the global scope.But in case of 'let' and 'const',it already block scoped we can use simple blocks i.e {}

function demo(){
    var a = 12;
    (function inDemo(){
        var b =14;
    })();
    console.log(a); //12
    console.log(b); //undefined
}
demo();