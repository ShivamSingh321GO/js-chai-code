

//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 

//the three ways to create objects are: 

//1.
const obj=new Object();
obj.name="shivam";
obj.rolln0=5;
console.log(obj);

//2.
const obj2=Object.create(null);//This is also correct. You're creating an object obj2 without any prototype (i.e., it doesn't inherit from Object.prototype).
obj2.name="rahul";
obj2.rollno=8;
console.log(obj2);


//3.it is same like 1st way also called as : OBJECT LITERALS

const jsUser={
    name:"shivam",
    age:18,
    email:"shivam@chatgpt.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"],

}

console.log(jsUser.email);//one way of excessing object varibles (key not in inverted commas)
console.log(jsUser["email"]);//second way of excessing object variables(keys in inveted commas and square bracket)
console.log();


//lets see why second way of excessing object varibles in imp:

const mySymb=Symbol("hello");
const details={
    "fullname":"shivam kumar singh",//key here in this type need to be in square bracket
     [mySymb]:"myKey1",//key need to be in square bracket
}

console.log(details["fullname"]);//the key need to be in bracket and double inverted commas
console.log(details[mySymb]);//while using a symbol type key we should only need to keep the key into  a bracket
console.log(mySymb);
console.log();

//lets see how we can freeze enitre obj it means the value of the keys it the obj can't be changed once it is freezed

const jsUser2={
    name:"rahul",
    age:18,
    email:"rahul@chatgpt.com",

}

jsUser2["email"]="rahul@432343.com";//changing the keys value before getting freezed
Object.freeze(jsUser2);//freezing the obj

jsUser2.email="rahul@gmail.com";// This will be ignored
console.log(jsUser2);
console.log();


const jsUser3={
    name:"piysuh",
    age:18,
    email:"piyush@chatgpt.com",

}

jsUser3.greeting=function(){
    console.log("hello js user");
    console.log(`user  name is, ${this.name}`)
}
console.log(jsUser3.greeting);//wrong syntax prints the entire function
console.log(jsUser3.greeting());

