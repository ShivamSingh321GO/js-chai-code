//getter-setter using defineproperties or function based

//the below code defines a constructor function user where getters and setters are created using Object.defineProperty().
function user(email, password){
    
    //The actual values are stored in private properties _email and _password.
    this._email=email;
    this._password=password;

    Object.defineProperty(this, 'email',{
        get:function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email=value
        }
    })

    Object.defineProperty(this, 'password',{
        get:function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password=value
        }
    })
}

const shivam=new user("shivam@gmail", "3234");

console.log(shivam.email);
console.log(shivam.password);
