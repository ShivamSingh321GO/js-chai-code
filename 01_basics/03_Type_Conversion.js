
//converting number to others

//1.number to string
let score1=4;

let scoreInString=String(score1);
console.log(typeof(scoreInString));//output: string
console.log(scoreInString);//score will be converted into string

console.log();

//2.number to Boolean
let score2=1;

let scoreInBool=Boolean(score2);
console.log(typeof(scoreInBool));
console.log(scoreInBool);


console.log();
//string to others

//1..string to number

let score3="shivam";

let scoreInNumber=Number(score3);
console.log(typeof(scoreInNumber));//output: number
console.log(scoreInNumber);//output:NaN (Not a number : means the value isnt a number)

console.log();

//2.string to Bool

let score3InBool=Boolean(score3);
console.log(typeof(score3InBool));//boolean
console.log(score3InBool);//true

console.log();
//3.empty string to bool

let scoreEmpty="";

let scoreEmptyBool=Boolean(scoreEmpty);
console.log(typeof(scoreEmptyBool));//boolean
console.log(scoreEmptyBool);//false

console.log()

//boolean to others

//1.bool to number

let scoreBool=false;

let scoreNumber=Number(scoreBool);
console.log(typeof(scoreNumber));//Number
console.log(scoreNumber);//if true then 1 if false then 0

console.log();
//2.bool to string

let scoreString=String(scoreBool);
console.log(typeof(scoreString));//string
console.log(scoreString);//false output 

console.log()

//some special cases:

//1.when value is null to others


let val=null;

//null to number
console.log(typeof(val));//object
console.log(val);//null

let nullToNum=Number(val);
console.log(typeof(nullToNum));//number
console.log(nullToNum);//0

console.log();
//null to string

let nullTostr=String(val);
console.log(typeof(nullTostr));//string
console.log(nullTostr);//null

console.log()

//null to bool
let nullToBool=Boolean(val);
console.log(typeof(nullToBool));//boolean
console.log(nullToBool);//false

console.log();
//2.undefined to others

 let val2=undefined
//undefined to number

console.log(typeof(val2));//undfined
console.log(val2);//undfined

let undefindToString=Number(val);
console.log(typeof(undefindToString));//number
console.log(undefindToString);//0

console.log();

//undefined to string

let undfinedToString=String(val2);
console.log(typeof(undfinedToString));//string
console.log(undfinedToString);//undefined

console.log();

//undfined to bool
let undfinedToBool=Boolean(val);
console.log(typeof(undfinedToBool));//booleanw
console.log(undfinedToBool);//false