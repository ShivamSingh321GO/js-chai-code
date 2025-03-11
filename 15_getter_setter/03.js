

//getter-setter using 


const user={
    _email: 'shivam@gmail',
    _password:"abc",



    get email(){
        return this._email.toUpperCase()
    },
    
    set email(value){
        this._email=value;
    }


}

// Creating tea as a Prototype of user
const tea=Object.create(user);
console.log(tea.email);


//NOTE:need more clarity on getter and setters in future

