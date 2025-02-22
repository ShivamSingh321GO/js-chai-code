

//now we are going to see how using new keyword we can make singleton objects(singleton objects are those)


const tinderuser=new Object();

tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isLoggedIn="false";

console.log(tinderuser);
console.log();


//lets see how nested objects can be made and called

const regularuser={

    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shivam",
            lastname:"singh",
        }
    }
}

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname);
console.log(regularuser.fullname.userfullname.firstname);
console.log();

//now lets see how can we combine the two objects in three ways:

//1.this is invalid way not recommended

const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};


const obj3={obj1,obj2};//i tis wrong
console.log(obj3);
console.log();

//2.we can use reassign keyword in two ways

//2.1: it is correct way but in this the concatenation result of both objects is stored in obj1:
const obj4=Object.assign(obj1,obj2);
console.log(obj4);
console.log(obj4===obj1);//see the whole concatenated value gets stored in obj1 thats why the true otuput is given


//2.2:in this all the concatenated values of two objects gets stored into the curly bracket which represents another object i.e empty intially

console.log(Object.assign({},obj1,obj2));

//3.using the method that we have used in the arrays , we can combine two objects this the PREFERED WAY THAT IS USED IN PRODUCTION LEVEL

const obj6={...obj1, ...obj2};
console.log(obj6);
console.log();


//now lets see how we can get keys ans values seprately of a object

const obj={
    name:"shivam",
    class:12,
    state:"delhi",
}

console.log((Object.keys(obj)));//all the keys are returned in seprate array
console.log(Object.values(obj));//all the values are returned in seprate array
console.log(Object.entries(obj));//all the keys with values are stored in array and one key-value pair is treated as one element

console.log(obj.hasOwnProperty('name'));//tells if the key is present in obj or not
console.log(obj.hasOwnProperty('DOB'));

