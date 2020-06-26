console.log("Befor preparing food")

function prepareFood(callback){
    setTimeout(()=>{
        console.log("prepare a burger for me");
        console.log("And please inform me when burger is ready");
        callback("sir your burger is ready");
    },10)
    

}
function myfood(value){
    console.log( value) 
    mythoast(prepareFrenchToast);
}
function mythoast(callback){
    setTimeout(()=>{
        console.log("prepare a french thoast for me");
        callback("FrenchThoast is ready");
    }, 20)
}

function prepareFrenchToast(value){
    console.log("So ",value);
    myCoffe(coffeeCallback);
}
function myCoffe(callback){
    setTimeout(()=>{
        console.log("I need a coffe");
        callback("your coffe is ready");
    }, 20)
}
function coffeeCallback(value){
    console.log("Sir", value)
}
    

prepareFood(myfood);
console.log("After cookinng dinner is ready");