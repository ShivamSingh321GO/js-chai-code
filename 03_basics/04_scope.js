
//hoisting in function

console.log(addOne(5));//hoisting in a normal function is possbile

function addOne(num){
    return num+1;
}

console.log(addTwo(5));//this will give error we can hoist function that are store in a variable
const addTwo=function (num){
    return num+2;
}