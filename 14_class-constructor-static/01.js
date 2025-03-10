

// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password} abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()} abc`;
//     }
// }

// const chai=new user("shivam","getshivamsingh@gmail", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//lets see how these above code works in behind the scenes without concept of classes



    function user(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    user.prototype.encryptedPassword=function(){
        return `${this.password} abc`
    }
    
    user.prototype.changeUsername=function(){
        return `${this.username.toUpperCase()} abc`;
    }

    const obj=new user("shivam","getshivamsingh@gmail", "123");
    console.log(obj.encryptedPassword());
    console.log(obj.changeUsername());
    
   