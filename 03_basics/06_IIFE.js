
//whats IIFE:
//An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and executed immediately after 
// its creation. It's a common pattern used to create a local scope, protecting variables from polluting the global namespace.

//there three ways we can declare iife functions.

//1.iife functions with a name

(function Greet(name){
    console.log(`hello everyone my  name is : ${name}`);
})("shivam");

//2. iife without name
(function (name){
    console.log(`hello everyone my  name is : ${name}`);
})("rahul");


//3.iife with arrow function
((name)=>{
    console.log(`hello everyone my  name is : ${name}`)
})("vansh");