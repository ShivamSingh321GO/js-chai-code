
//symbol is used to make a value unique
const id=Symbol("123");
const anothrId=Symbol("123");

console.log(id==anothrId);//here both the values are unique therefoere output is false


// we have two types of datypes

//1.primitive type: String,Number,Boolean ,null,undefined,Symbol,BigInt
//all the values and variable name are stores in stack for primitive types
//copy of varaible is stored here

//2.Reference or non primitive type: Array,Objects,Function
//in non primitve types the refrence of the dataypes are stored in heap but variable or function name are stored in stack
//refreces of objectes are stored in heap
