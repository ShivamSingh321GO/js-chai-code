

//in js if a function doesnt reuturns anything then it returns undfined
function addTwoNumbers(number1,number2){

    console.log(number1+number2);
}

const result = addTwoNumbers(3,5);

console.log("result:",result);//the output is given undefined because using result we are trying to catch the value returned by addTwoNumbers func.

//lets see how can we get the values returned from a function

function subTwoNumbers(number1,number2){
           return(number1-number2);
}

const result2 = subTwoNumbers(10,5);

console.log("result2:",result2);
console.log();

//lets see real life cases in form of examples on functions

//1.
function loginUserMessage(username){
    return `${username} just logged in` 
}
console.log(loginUserMessage("shivam"));

//2.//when no arhument is given
function loginUserMessage2(username){
    return `${username} just logged in` 
}
console.log(loginUserMessage2());//undefined just logged in :is the output

//3.handling the case when the argument is empty
function loginUserMessage3(username){
    if(username===undefined){
        console.log("Please enteyr a username ");
        return ;
    }
    return `${username} just logged in` 
}
console.log(loginUserMessage3());//no argument given

//4.what if the argument is not given by us still we want a alterative default argument that will be given to the function if we didnt provided the function any parameter

function loginUserMessage3(username="shivam"){//default arguement value is given to parameter
    if(username===undefined){//or if(!username){}
        console.log("Please enteyr a username ");
        return ;
    }
    return `${username} just logged in` 
}
console.log(loginUserMessage3());;//no argument given
