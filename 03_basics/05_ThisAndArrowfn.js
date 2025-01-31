


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

console.log();

//now lets see how syntactical diffrences comes when we return something in a arrow function

//1.
const mulTwoNOs=(num1,num2) => {
  return num1*num2;
}
console.log(mulTwoNOs(2,3));

//2.here no need to write return keyword it automatically understands that the value after computation need to be returned

const DivTwoNOs=(num1,num2) => ( num1/num2);
  console.log(DivTwoNOs(10,2));
  console.log();

  //we can directly declare a object inside a arrow fn(didnt covered by hitesh this example did using gpt)//we can simillary pass arr into arrow fn
  
  const val=()=>({
    username:"shivam",
    id:5,
    printId:function(){
        console.log(this.id);
    }
  })
  const USER=val();
  USER.printId();

  //in above example we can have a question that how we are able to call printId function using a USER variable:
  
  /*
  an:
  The reason you're able to call printId() using the user variable is because the val() function returns an object, 
   and that object contains the printId method as one of its properties
   */
  