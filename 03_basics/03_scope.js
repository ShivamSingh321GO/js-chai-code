//disadvantage of var thats why we use it rarely now a days(its global scope can be  a problem in our code)

if(true){
    let a=10;
    const b=90;
    var c=89;
}
//console.log(a);//it will give error it has local scope
//console.log(b);//it will give error it has local scope
console.log(c);//it will not give error it has global scope

var c=10;
if(true){
    let a=10;
    const b=90;
    var c=55;
}
console.log(c);//it will give the latest modified value of var variable c

//thats why we use let in for loop because it has local scope 
for(let i=0 ; i<5; i++){

}

//now i var of for loop cant be accessed outside the loop