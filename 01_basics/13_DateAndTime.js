

//Dates are bit of complex pain point in JS we are going to discuss basics of it, in projects we are going to learn it practically

let myDate=new Date();//it represents the current date and time in the local timezone

console.log(myDate);//When you print the Date() object directly, JavaScript automatically converts it into a string in the ISO 8601 format.

//to get date in out local date and time zone 
console.log(myDate.toLocaleString()); // Shows date and time in your local timezone
console.log(myDate.toString()); // Also shows the local time as a string
console.log(myDate.toDateString());
console.log(typeof(myDate));

//lets see how can we create out own date 
//Note: all the time are given in milisconds in java script

let myCreatedDate=new Date(2023,0,23);//this formal followed in other countires where 0 represent month jan
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date("2023-01-14");//this formal followed in other countires where 0 represent month jan
console.log(myCreatedDate2.toDateString())


let myCreatedDate3=new Date("01-14-2023");//usualy we use this format here 01 represents the jan month
console.log(myCreatedDate2.toDateString())

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);//getMonth() returns the zero-based index of the month ,like our 1 month wil be jan

console.log(newDate.getDay());//2 is returned the day im writting the code is tueseday so in js the day is retured for the current day

//very useful date concept:we wil define objects inside the toLocaleString//it is useful for customizing the toLocaleString more further
newDate.toLocaleString('default',{
    weekday:"long",//obj
    //more objs we can create
    //in future see more on this


})