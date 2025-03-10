
//inheritance code:

const user={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    Teaches:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport   //it used to inherit the TeachinSupport   // Inheriting from TeachingSupport
}

console.log(TASupport.isAvailable);


Teacher.__proto__=user;//this sytax is also used for inheritance//teacher inherits user
console.log(Teacher.name);


//now lets see modern syntax for inheritance:

Object.setPrototypeOf(TeachingSupport, Teacher);//TeachingSupport inherits Teacher
console.log(TeachingSupport.Teaches);
