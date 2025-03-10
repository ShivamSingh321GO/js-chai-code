

//using prototype for inheritance:

//ex:

//constructor function
function person(name, age){
    this.name=name;
    this.age=age
}

person.prototype.greet=function(){
    return `Hello my namme is ${this.name} and my age is ${this.age}`;
}

const person1=new person("shivam",23);
const person2=new person("rahul",22);

console.log(person1.greet());
console.log(person2.greet());  //see from gpt how this code is working


