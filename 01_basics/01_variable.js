
const accountId=6765;
let accountEmail="shivamsingh@gmail.com";
var accountPassword="2324";
accountCity="jaipur";//(var keywrd type variable )it is also a way to declare a variable but it is recommned to use this kind of declaration

let accountstate;

// accountId=2;//we cannot reassign a value to cons var in js so it will show an error
// console.log(accountId);

/*
  Prefer not use var
  because of issue in block scope and functional scope
 */

accountEmail="hc@hc.com";
accountPassword="342";
accountCity="bengaluru";

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]);//this syntax will print all the varibles in a table
