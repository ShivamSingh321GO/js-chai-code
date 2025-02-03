
//ex1:
const arr=[1,2,3,4];

const intialval=0;

const totalSumArr=arr.reduce( (accumlator,currentValue) => accumlator+currentValue ,0 );//0 is intial val of accum

console.log(totalSumArr);
console.log();

//ex2:
const arr2=[1,3,5];

const val=arr2.reduce( (accum,currval) =>{

    console.log(`acc: ${accum} and currval: ${currval}`);
    return accum+currval;

} ,3);//3 is intial value for accum

console.log(val);
console.log();


//ex:3:
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    
    },

    {
        itemName:"python course",
        price:4999
    
    },


    {
        itemName:"java course",
        price:1999
    
    }
];

const priceToPay=shoppingCart.reduce ((acc,item)=>acc + item.price,0);

console.log(priceToPay);