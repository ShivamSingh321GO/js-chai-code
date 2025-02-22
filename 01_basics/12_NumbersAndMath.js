
//in JAVA like we used to have wrapper classes of Integer and Strings simillary in JS we have wrappre objs that have methods and fucntions in it 

//Numbers

const score=400;
console.log(score);

const balance =new Number(100);//object of Number
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance));//since  balance is created using new keyword it will considered as object
console.log(balance.toString().length);
console.log(balance.toFixed(2));//it will give more precised value like zeroes after the decimal

const hundreds=1000000000;

console.log(hundreds.toLocaleString());//it given numbers seprated by commas as per currency of usa
console.log(hundreds.toLocaleString('en-IN'));//it gives numbers seprated by commas as per indian currency lakhs and crores

//Maths


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil((4.3)));
console.log(Math.floor((5.6)));

console.log(Math.random());//it gives random values from range 0 to 1;
//if we want to get the random values as per our desired range so then we need to derive our formula for it//see hitesh video for this part

console.log((Math.random() * 10) + 1);//this formula will not give values less than one
console.log(Math.floor((Math.random() * 10) + 1));//this formula will not give values less than one and will give precise floor value 


const min=10;
const max=20;

console.log(Math.floor((Math.random() * (max-min+1)) + min));
