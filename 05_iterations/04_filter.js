

//lets see whats the limitation of for each loop we have used in previous file: we cant return anything from for each loop

const progLang=["js", "rb", "py", "java", "cpp"];

const values=progLang.forEach((item)=>{
    // console.log(item);
    return item;//this will not work
})

console.log(values);//undefined will be given because nothing is returned from aroww fn
console.log();


//filter: the filered values will be given into a array

//ex1: lets see how we filter function return a value or a arrys items , while we were not able to do it in FOR EACH LOOP.
const nums=[1,2,3,4,5,6,7,8,9];

const newNums=nums.filter((num)=>{
    return num;
})

console.log(newNums);
console.log();

//ex2: returning items explicitly 

const newNums2=nums.filter((item)=>{
    return item>4;//basically these are the operations we do using filter //also we are returning the items explicitly therefore return keyword is used inside the curly brackets 
})

console.log(newNums2);
console.log();

//ex3: returning a the items of nums impliclitly without using return keyword

const newNums3=nums.filter((item)=> item);//no need to use curly brackets 

console.log(newNums3);
console.log();

//ex4: in the top we discussed we cant return values from foreach loop but still we want to use return items from for each loop how we can do it:

const arr=[];

nums.forEach((num) =>{
   if(num>4){
      arr.push(num);
   }
})

console.log(arr);

//

const books = [
    {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-fiction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'Fiction', publish: 2000, edition: 2015},
    {title: 'Book four', genre: 'Science Fiction', publish: 1985, edition: 2010},
    {title: 'Book five', genre: 'Fantasy', publish: 2010, edition: 2018},
    {title: 'Book six', genre: 'Mystery', publish: 1995, edition: 2005},
    {title: 'Book seven', genre: 'Historical', publish: 2003, edition: 2010},
    {title: 'Book eight', genre: 'Biography', publish: 2010, edition: 2017},
    {title: 'Book nine', genre: 'Self-help', publish: 2016, edition: 2020}
];
 
const fetch1=books.filter( (bk) => bk.genre==='Fiction');//implicit return 

console.log(fetch1);

const fetch2=books.filter((bk) => {   //explicit return 
    return bk.publish==2010
})
console.log(fetch2);

const fetch3=books.filter( (bk) =>{
    return bk.publish >=2010 && bk.genre=="Biography";
})
console.log(fetch3);