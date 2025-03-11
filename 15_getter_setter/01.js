

//getter setter using classes:

/*4️⃣ Why Use _password and _email Instead of password and email?(fro gpt)
If we use this.password = value; in the setter, it will call the setter method again → that leads to Infinite recursion occurs.
Using _password and _email avoids this issue because they are separate private variables that don’t trigger their own setters.*/

class user{
     constructor(email, password){
        this.email=email;
        this.password=password;
     }

     get password(){
        return this._password;
     }
     set password(value){
        this._password=value; // Use a different variable to store the password
     }

     get email(){
        return this._email;
     }
     set email(value){
        this._email=value; // Use a different variable to store the email
     }
}

const shivam=new user("shivam@gmail", "123");
console.log(shivam.password);
console.log(shivam.email);
