

#whats prototype??(the below contents are from gpt)

-->In JavaScript, a prototype is an object from which other objects inherit properties and methods. Every function in JavaScript automatically has a prototype property, which allows you to add shared methods that multiple instances can use without duplicating them in memory.

-->key points on prototype:

1.Prototype Chain:

Every object in JavaScript has an internal reference to a prototype object.
If you try to access a property/method that an object doesn't have, JavaScript looks for it in the prototype.

2.Function Prototype:

When you define a function in JavaScript, it gets a prototype property automatically.
This prototype property is an object that can hold methods and properties shared across all instances.

3.Object Inheritance:

When an object is created using a constructor function, it inherits from the constructor's prototype.



//use of this keyword:(these below contents are from hitesh notes file):


/*see all these explanation with help of example from gpt for better understanding: 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
