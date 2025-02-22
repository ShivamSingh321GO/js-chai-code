
const name="hitesh";
const repoCount=50;

//old way of concatenating values

console.log(name +repoCount+"value");


//new way of concatenating values (modern way)

console.log(`Hello my nameis ${name} and my repo count is ${repoCount}`);//this is called string interpolation

const gameName=new String('valorant');

console.log(gameName[0]);
console.log(gameName.__proto__);//using this we can see the object gamename prototype( what functions does it have or inherits from other objects) usually we can see it on a browser

//in browser if we see prototype of gameName string in browser we can see all the functions we can use for strings


//some of examples of strings functions are:

//NOTE: we can alos  use all the methods like using prtotype : console.log(gameName.prototype.length); it is only valid for objects

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newStr=gameName.substring(0,4);
console.log(newStr);

const anotherStr=gameName.slice(-8,4);
console.log(anotherStr);

//slice and substring does same thing used to extract some part of the string but the key diffrence is substring does accept negative indices but slice fn accepts it


const newstrOne=" shivam ";
console.log(newstrOne);
console.log(newstrOne.trim());//spacers got trimed


const url="https://shivam.com/shivam%20singh";

console.log(url.replace('%20','-'));

console.log(url.includes('shivam'));

//The split() function in JavaScript is used to divide a string into an array of substrings, based on a specified delimiter.
const str1="hello how ,are you"
console.log(str1.split(','));//wehere it will see "," from there it will split and store in array

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]    