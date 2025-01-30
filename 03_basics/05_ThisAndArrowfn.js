


const user={

    username:"shivam",
    price:999,

    welocmeMessage: function(){
        console.log(` ${this.username}, welcome to website`);
        console.log(this);//it will all the the values and function present in a object
    }
}

user.welocmeMessage();
user.username="rahul";
user.welocmeMessage();
console.log(this);// "this" in global space represents global object in every js engine (here we are running program in node js therefore here the output wil be empty curly braces but if it would have been a browser the output would have been a "window" obj)
console.log();

//lets see what values this keyword gives if used under  diffrent types of functions:

//1.normal fn:
function greet(){
   console.log(this);//it will give a global object named 'global' in node js //in normal function the output of this is global object
   console.log("good morning");
}
greet();

//2.when a function is stored inside a funciton

const greet2=function(){
    console.log(this);//it will also give global obj
    console.log("good evening");
}
greet2();

//3.arrow function

const greet3=()=>{
    console.log(this);//it will also give global obj
    console.log("good evening");
}
greet2();
console.log();


//now lets see more how normal fn , when fn stored in variable, arrow funciton behaves with this keyword:


//1.normal fn:
function chai() {
    let username="shivam";
    console.log(this.username);//it will give undefined this.username format can be only used with objects

}
chai();

//2.when a fn stored in a variable
const chai2= function (){
    let username="rahul";
    console.log(this.username);//it will give undefined this.username format can be only used with objects

}
chai2();

//3.arrow function

const chai3 = () => {
    let username="piyush";
    console.log(this.username);////it will give undefined this.username format can be only used with objects
}
chai3();
console.log();
console.log();
console.log();


//lets see what values we get when we use this keyword in a function when a variable is present in a function

//1.normal fn:
function wish(){
    let msg="happyBdy";
    console.log(this);//this will give global obj when this is used with normal function
    
 }
 wish();
//2.when a fn is stored in variable:
const wish2=function (){
    let msg="happyBdy";
    console.log(this);//this will give global obj when this is used with a function stored in a variable
    
 }
 wish2();

 //3.arrow fn:
const wish3 = () => {
    let username="piyush";
    console.log(this);////it will give undefined this.username format can be only used with objects
}
wish3();
