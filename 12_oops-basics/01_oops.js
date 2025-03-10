

//object literals

const user={
    userName:'shivam',
    loginCount:8,
    singedIn: true,

    getUserDetails:function(){
        // console.log('Got  user details from database');
        console.log(`userName ${this.userName}`);
        
        
    }
}

console.log(user.userName);
console.log(user.getUserDetails());
console.log();



//crating refrences of objects using new keyword

function users(userName, logincount, isLoggedIn){
    this.userName=userName;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;
    
    // return this;//use this or not it does not matter implicitly this is returned
   
}

const userOne=  new users("shivam", 12, true);
const userTwo=  new users("rahul", 13, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.userName);
console.log(userTwo.userName);






