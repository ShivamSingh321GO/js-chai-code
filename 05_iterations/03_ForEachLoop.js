

/*
FOR EACH LOOP:
The forEach method is a built-in method in JavaScript that allows you to iterate over iterable objects like arrays, sets, 
and maps. In the case of a Map, forEach is particularly useful because it gives you access to both the key and value directly 
in the callback function.
*/

//EX1: for each loop on maps:

const map=new Map();
map.set('IN',"India")
map.set('US',"united states")
map.set('FR',"France")
map.set('US',"united states");//duplicates not allowed into a map

console.log(map);

//using normal fn as callback fn to the to the foreach method
map.forEach(function(val){
    console.log(val);
})

//using arrow fn as callback fn for foreach method

map.forEach((val, key) => {
    console.log(`${key} value is ${val} `);
});

  
console.log();

//Ex2:for each loop on arrays

const progLang=["js", "rb", "py", "java", "cpp"];

progLang.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})
console.log();

//ex3: for each loop on objects sotred into a array

const language=[
    {
        languageName:"javascript",
        languageExt:"JS",
    },
    {
        languageName:"python",
        languageExt:"py",
    },
    {
        languageName:"java",
        languageExt:"java",
    },

]

language.forEach((item) =>{
    console.log(item.languageName);
})


