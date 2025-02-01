

//switch case:
/*
NOTE : why we need to use switch case when we have if elseif??
ans:
a switch statement is used to evaluate an expression against multiple possible cases (values), and execute different code
 depending on which case matches. It’s an alternative to using multiple if-else if conditions, especially when there are many 
 possible conditions to check for.
 */
//ex1:
 const month=3;

 switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break
    case 3:
        console.log(",march");
        break;
    default:
        break;
 }


 //ex3:
 const month2="march";

 switch(month2){
    case 'january':
        console.log("january");
        break;
    case 'february':
        console.log("february");
        break
    case 'march':
        console.log("march");
        break;
    default:
        break;
 }

//ex3:if the codition value is met and break condition is not written then it will also print the case below it.
const month3="january";

switch(month3){
   case 'january':
       console.log("january");
       //break statement is missing
   case 'february':
       console.log("february");
       break
   case 'march':
       console.log("march");
       break;
   default:
       break;
}


