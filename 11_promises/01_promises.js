
//ex1: 

// const promise1=new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();//it is necessary to resolve otherwise the promise wont be consumed 
        
//     },1000);
// })

// promise1.then(function(){
//     console.log('Promised is consumed');
    
// })

//the example above can also be written as :

// new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log('Async task2 is completed');
//         resolve();//it is necessary to resolve otherwise the promise wont be consumed 
        
//     },1000);
// }).then(function(){
//     console.log("Async task2 is resolved")
// })

//ex2: in this example we are going to print the resolved value of a promise.


const promise2=new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("hello");
        
         resolve({userName:"chai", emai:'chai@example.com'})
    },1000);
})

promise2.then(function(user){
    console.log(user);
})

