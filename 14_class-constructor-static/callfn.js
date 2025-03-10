

function Setusername(username){

    //complex Db calls 

    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){

    Setusername.call(this,username) ;//using this as a paremter is important because it says that use username of this context in setUsername fn

    this.email=email;
    this.password=password;
    

}

const obj=new createUser("shivam","getshivamsingh@gmail", "123");

console.log(obj);


