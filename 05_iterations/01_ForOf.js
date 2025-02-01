

//for of loop


//SYNTAX: for of loop
/*for(const iterator of Object){

   object means here on what obj like array, string you want to iterate
}
*/

//ex1:
const arr=[1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

console.log()

//ex2: 
const greetings="Hello Shivam";

for(const greet of greetings){
    console.log(greet);
}
console.log();

//ex3: for of loop on maps

const map=new Map();
map.set('IN',"India")
map.set('US',"united states")
map.set('FR',"France")
map.set('US',"united states");//duplicates not allowed into a map

console.log(map);

for(const [key,val] of map){
    console.log(key, ":", val);
    // console.log( val);
}

//ex:4: when for of loop used on objectsL

//we cant use for of loop on objects because for of loop is designed to work with iterable objects like arrays, maps, and sets, not plain objects.

// const myObj={

//     "name":"shivam",
//     "game2":"spiderman"
// }

// for(const [key,value] of myObj){
//     console.log(key, ':', value);
// }


//NOTE: TO APPLY LOOP ON OBJECTS WE USE FOR IN LOOP SEE NEXT FILE.