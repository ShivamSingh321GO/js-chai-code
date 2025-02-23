//truthy and falsy are values when used with the conditional statements can give unexpected values.

//firstly lets see what are truthy and falsy values then we will disuss all the possible values.

//ex1:
const userEmail="shivam.ai";//when value is in string it acts as true val

if(userEmail){
    console.log("got the mail")
}
else{
    console.log("didnt got the mail")
}

//ex2:
const userEmail2="";//when no value in string acts as false

if(userEmail2){
    console.log("got the mail")
}
else{
    console.log("didnt got the mail")
}

//ex3:
const userEmail3=" ";//when space given acts as some val  in string and behaves as true

if(userEmail3){
    console.log("got the mail")
}
else{
    console.log("didnt got the mail")
}

//ex4:
const valArr=[];//when arr is empty it will act as true;
if(valArr){
    console.log("output given");
}
else{
    console.log("output not given");
}
console.log()
//falsy values in js
//false,0,-0, BigInt 0n, "", null, undefined, NaN

//truthy values in js
//"0","hello" or any value in string, " " , [], {empty obj} , function(){}

//lets see how can we see if an array is empty or not
const arr=[];
if(arr.length===0){
    console.log("ARR is empty");
}
else{
 console.log("arr isnt empty")
}
console.log();

//how to check if the object is empty

const emptyObj={};

if(Object.keys(emptyObj).length==0){//because Object.keys give the output in an new array
    console.log("object is empty")
}
console.log();


//Nullish coalescing operator (??) : null undefined
/**
  ABOUT NULLISH COALESCING OPERATOR:
  1.The nullish coalescing operator (??) in JavaScript is a logical operator that returns the right-hand operand when the 
  left-hand operand is null or undefined. Otherwise, it returns the left-hand operand.
  2.we will learn use case of it during real world projects
 */

//EX:
let value;
// value=5 ?? 10;
// value=null??10;
// value=undefined?? 15;
value=null?? 10 ??20;

console.log(value);

//ternary operators: they are diffrent from NULLISH COALESCING

//sysntax :  condtion ? true : false;

//ex:
 const burgerPrice=201;
 const cost=burgerPrice<=200? console.log("less than 200") : console.log("more than 200")
 console.log(cost);