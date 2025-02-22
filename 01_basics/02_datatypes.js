
"use strict";//need to write this line so that js treats all code as newer version

/*
  NOTE:
   Using "use strict"; in JavaScript is important because it enables Strict Mode, which helps catch common coding mistakes
   and enforces better coding practices. It prevents certain bad practices that could lead to unexpected behavior in JavaScript.

    ex:

    "use strict";
    x = 10; //  ReferenceError: x is not defined (this error will be thrown when we run the program in strict mode)
    console.log(x);

 */

x=10;
console.log(10);
//alert(3+3)//we are using nodejs, not browser therefore  alert only works on browser console

//datatypes

let name="hitesh";
let age=18;
let isLoggedIn=false;


/*these are the datatpes in js

NOTE: 

In JavaScript, everything that is not a primitive type is an object. That includes arrays, errors, functions, dates, and
 even wrapped versions of primitive types like strings and numbers.
JavaScript treats many built-in structures as objects because they inherit properties and methods from prototypes.

//TYPES of datatypes:

1.primitive types
number
bigint
string
boolean
null=>standalone value
undefined
symbol=>unique (used while working with react)

2.non primitive types:

object
Arrays
functions
*/

console.log(typeof(age));
console.log(typeof(undefined));//output will be undfined
console.log(typeof(null));//output will be object