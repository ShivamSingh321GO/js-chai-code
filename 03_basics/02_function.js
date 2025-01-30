

//the (...) operator is called as rest opr and spread opr the name is given rest or spread as per its usecase

//below lets see how rest opr works

// assume we dont have any idea how many arguments a user will give to a fn so(or how many items he will add to cart) we use (...argument_name) and will call it rest opr

//ex1:
function calculateCartPrice(...num1){
  return num1;//this will return all the values given as argument
}
console.log(calculateCartPrice(200,400,600));//allthe prices will be returned into a array

//ex2:
function calculateCartPrice2(num1,num2,...num3){
    return num3;//num1 will store 200 ,num2 will store 400 and rest left will be store by num3 i.e (600 and 900 in array form)
}
console.log(calculateCartPrice2(200,400,600,900));
console.log();


//lets see how can we pass a object into a function

const StudentObj={
    name:"shivam",
    course:"BTECH",
    year:"second"
}

function showDetails(anyobj){
    console.log(`the name of the student is: ${anyobj.name}`);
}
showDetails(StudentObj);
//we can also pass directly the obj into the argument of the function
showDetails({
    name:"rahul",
    course:"BTECH",
    year:"second"
})



//lets see how can we pass a Array into a function

const newArr=[233,5999,6777,988];

function returnSecondValArr(anyArr){
    console.log(`the second of the newArr is: ${anyArr[1]}`);
}
 returnSecondValArr(newArr);
 //we could have direcltly passed an arrray to the argument of funciton call
 returnSecondValArr([4,6,4,8]);