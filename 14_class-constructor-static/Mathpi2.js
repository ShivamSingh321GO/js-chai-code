

console.log(Math.PI);
Math.PI=4;

console.log(Math.PI);

//now lets change the value of pi 


// Object.defineProperty(Math, "PI",{
//     writable:true,

// })

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


// Math.PI=5;

// console.log(Math.PI);

/*
 NOTE : so conclusion is that : 
 1. Math.PI is read-only (writable: false).
 2.Math.PI is non-configurable (configurable: false), so Object.defineProperty() cannot modify it.
 
*/

//NOTE: You cannot change the value of Math.PI, but you can create your own variable.

let myPi=Math.PI;
console.log(myPi);
myPi=4;
console.log(myPi);





