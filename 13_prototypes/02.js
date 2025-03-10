

let myHeroes= ["thor", "spiderman"];

let heroPower={
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

//when a function is added in  global Object then it is accessible all arrays strings or objects
Object.prototype.godFather=function(){
    console.log("godfather is powerful than all the super herores");
    
}

heroPower.godFather();//object can also acess godFather

myHeroes.godFather();//array can also access godFather function


//when a function is added for only arrays it will wont work for others like objects or strings
Array.prototype.msgFormyHeroes=function(){
    console.log("thor and spiderman are stored into a array");
    
}

// heroPower.msgForheroPower();//power given to array only not the objects(thats why it is not working)

myHeroes.msgFormyHeroes()