

//The for...in loop is specifically designed to iterate over the keys (property names) of an object.

//ex:for in loop on objs
const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myobject){
    console.log(key);
}

//to get values of obj
for(const key in myobject){
    console.log(myobject[key]);
}
console.log();

//ex2: for in loop on arrays.

const progLang=["js", "rb", "py", "java", "cpp"];

for(const key in progLang){
    console.log(progLang[key]);
}

//ex3: for in loop on maps

const map=new Map();
map.set('IN',"India")
map.set('US',"united states")
map.set('FR',"France")
map.set('US',"united states");//duplicates not allowed into a map

console.log(map);

for(const key in  map){//this will not give any output
    console.log(key)
    
}

/*

 1. This  above code will not work: because ,  The for...in loop is meant for iterating over the keys of objects, not for Map instances.
 2.To iterate over a Map, you should use the appropriate Map methods such as for...of, or the map.forEach() method.

 */


//NOTE : DO FOREACH LOOP FROM NEXT FILE




