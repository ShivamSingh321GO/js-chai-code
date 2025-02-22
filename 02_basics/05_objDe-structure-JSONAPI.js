

//OBJECT DESTURCTURING :


const course={
    coursename: "js hindi",
    price:"999",
    courseInstrucotr:"shivam",
}

//the values we can call from course object in following ways:

//1.a normal way that we are doing from earlier

console.log(course.courseInstrucotr);

//what if we need to print the courseinstructor 3 or more times

//than we need to write long courseInstructor three times

// console.log(course.courseInstrucotr);
// console.log(course.courseInstrucotr);
// console.log(course.courseInstrucotr);
//instead of writting long key coureseInstructor we can use de-structuring of keys that is given below

//2: De-strucutring of keys

const{courseInstrucotr}=course;
console.log(courseInstrucotr);//we can directly use course courseInstructor 

//the more easy way to destructure is
const{courseInstrucotr:instructor}=course;//we have shorten the  key name OR modified it in shorter ,so that we can easily write it to print it
console.log(instructor);
console.log();


//now lets see how can we use de-structuring in real world like in react we are going to use it a lot:

const navbar=({company})=>{
  //this is basic body how we will use destructure in react
}

navbar(company="shivam");

//JSON API

//json is also kind of lines of js code in object form or array form but in json file which is used to give a API response in json file type example:

//1.json file values stored in  a obj:
// {
//     "name":"shivam",//keyes and values both will be in double inverted commas in json file
//     "coursename":"js",
//     "gender":"male"
// }

//2.some times json file values will be  stored in  a array as per our project requirements :

[
    {},
    {},
    {},
]