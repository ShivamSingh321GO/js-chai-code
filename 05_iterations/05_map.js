
//map: returns a new array of the operations performed
const myNums=[1,2,3,4,5,6,7,8,9];

const newNums=myNums.map( (item) => { return item + 10}); // it is necesary to write return into curly braces other wise all the item values will be returned as undefined try doing it without reuturn keyword
console.log(newNums);
console.log()

//lets see how can we do chaining of map

let values=myNums           //cant use const var because values of const cant be changed
            .map( (num)=>num+10)
            .map( (num)=>num+1)
            .filter( (num)=>num>=15);

console.log(values);
              