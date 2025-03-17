



// function outer(){
//     const name='shivam';
//     const age=45;
//     function inner(){
//         console.log('name from innerfn:'+ name);
//     }
//     return inner;

// }

// const a=outer();
// a();
// console.log(a.age);//it wont work see below its reason 


//NOTE: THE Above code a.age isnt working because : The inner() function forms a closure, meaning it "remembers" variables from outer(), 
// but only those used inside it.

//lets fix it;  

function outer(){
    const name='shivam';
    const age=45;
    function inner(){
        console.log('name from innerfn:'+ name);
    }
    return {inner,age};

}

const a=outer();
a.inner();
console.log(a.age);//it wont work see below its reason 


