


class user{
        constructor(username){
            this.username=username;
        }

        logMe(){
            console.log(`USERNAME IS ${this.username}`);
        }
            
}

class Teacher extends user{
        constructor(username,email,password){
            super(username);//super used to invoke the constructor of the super class 
            this.email=email;
            this.password=password;
        }

        addcourse(){
            console.log(`A new course4 was added by ${this.username}`);
            
        }
}

const Teacherobj=new Teacher("shivam","getshivamsingh@gmail", "123");
Teacherobj.addcourse();

Teacherobj.logMe();//accessing methods of parents clas


const userobj=new user("rahul")
userobj.logMe()


// console.log(userobj===Teacherobj);
console.log(Teacherobj instanceof user);
console.log(Teacherobj instanceof Teacher);


