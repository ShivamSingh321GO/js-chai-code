

//arrays

//1st way of declaring a array
const arr=[0,1,2,3,4,5];
console.log(arr);
console.log(arr[0]);

//2nd way of declaring arr
const arr2=new Array(1,2,3,4);
console.log(arr2[0]);


//Array methods

arr2.push(6);
arr2.push(7);
console.log(arr2);
console.log(arr2.pop());//7

const arr3=[3,5,6,7];

arr3.unshift(0);//it puts the 0 on 0th index and shifting all the elements on right by one index
console.log(arr3);
arr3.shift();
console.log(arr3);//it removes the 0 from 0 index and makes the array normal 



const arr4=[5,4,3,2,1];


const newArr=arr4.join();//converts the array into a string

console.log(newArr);
console.log(typeof(newArr));

//slice and splice

//slice
const Arr=[9,8,7,6];

const slicearr=Arr.slice(1,3);

console.log("slicearr",slicearr);//here the two elments will be sliced from main array and stored into another array //also last element will be exculusive
console.log("Arr:", Arr);

//splice

const splicearr=Arr.splice(1,3);

console.log("Arr:", Arr);//here the array elements that got spliced will be removed from the main array
console.log("splicearr",splicearr);//spiced array inclued last element inclusive



