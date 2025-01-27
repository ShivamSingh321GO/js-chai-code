

//how null and undefined gives diffrent outputs when we use then == and comparision operators:


console.log(null==0);//the equality works diffrent than comaprison <> operators (here js treats null as undefined therefore 0 is not equal to null)
console.log(null>=0);//it is because the null is treated as number 0 when it used with comparision operators(< or >)
console.log(null>=1);
console.log(null>0);

//(=== operator not only checks the equality of two values but also checks if two values have same dataypes than only true is given)

console.log("2"===2)//output will be false

//these kind of operation we should avoid doing in our real world projects they are only goood for interview questions
console.log(null==0);
console.log(null>0);
console.log(null<0);

//these kind of operation we should avoid doing in our real world projects they are only goood for interview questions
console.log(undefined==0)
console.log(undefined>0);
console.log(undefined<0);