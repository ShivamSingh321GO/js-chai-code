

//this is the named now you know objects video:

//In this part we are able to clearly see how we cant change the value of a object property as it is internally locked by js so that , that property remains constant
// console.log(Math.PI);
// Math.PI=5;//value cant be changed as it is a constant value
// console.log(Math.PI);


const descripter=Object.getOwnPropertyDescriptor(Math, "PI");//this function gives the properties of the Math obj
console.log(descripter);


// lets see with help of a example how we can change that objects property value so that we break that lock of a constant ( Creating an Object and Checking Its Property Descriptors)
const books={
    name:'lust stories',
    price:300,
    isAvailable:true,

    orderBook: function(){//object value stored into a function
        console.log("book is not available");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(books, "name"));

// Modifying the name Property to Make It Immutable

Object.defineProperty(books,'name',{
    writable:false,//making writable property false so that any one cant change the value of false
    enumerable:false   //making enumerable false we cant acess name property when we iterate over it using loop(if we make it true we can acess it)
})
console.log(Object.getOwnPropertyDescriptor(books,'name'));

// Trying to Change the name Property:

for(let [key,value] of Object.entries(books)){

    if(typeof value !== 'function'){//this check is applied because the for of loop does not applied on object values stored into a function
        console.log(`${key}: ${value}`);
        
    }
}

//trying to change the name of the book
books.name="english";
console.log(books);









