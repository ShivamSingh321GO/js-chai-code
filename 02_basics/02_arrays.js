

//how can we combine the elements of two elements

const marvel_heroes=["thor", "ironman", "spiderman"];
const dc_heroes=["superman","flash","batman"];

//marvel_heroes.push(dc_heroes);//not a correct way 

//console.log(marvel_heroes);


//marvel_heroes.concat(dc_heroes);//this is incorrect way of combining elements of two arrays as it need to be stored into another var
//console.log(marvel_heroes);

console.log();

//correct ways to combine elements of two arrays in one array

//1.using concat method
const allheroes=marvel_heroes.concat(dc_heroes);//this is correct but not useful in production level
console.log(allheroes);

//2.using spread operator
const all_newheroes=[...marvel_heroes, ...dc_heroes];//best way of combining two array elemets
console.log(all_newheroes);
console.log();

//suppose we have nested arrays into a array and we want to resolve every element and store into a array and each element should be individual

const nestedArr=[1,2,3,[4,5,6], [6,7,[4,5]]];//each individual level can be also removed see chat gpt for more examples

const real_arr=nestedArr.flat(Infinity);//infinity means how many nesteed array we want to resolve so here we passed infinity means resolve all the nested arrays into one array
console.log(real_arr);
console.log();

//converting into and cheking arrays
console.log(Array.isArray("SHIVAM"));//Checks if pased obj is array or not
console.log(Array.from("SHIVAM"));//makes array of the given strings
console.log();

//intresting : INTERVIEW QUESTION: IS THIS POSSILE:
console.log(Array.from({name:"SHIVAM"}));//this will give empty array as we have mention that using object keys we have to make array or using values make arrays

//making arrays of given value , values can be array, string,Number anything
let score1=400;
let score2=300;
let score3=200;

console.log(Array.of(score1,score2,score3));