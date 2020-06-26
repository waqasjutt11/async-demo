console.log("Before Preparing Food");
function myFood(data){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if (data !== 2){
            console.log("Prepare a burger for me");
            resolve("your burger is ready");
            }
            else reject("value is not acceptable")
        }, 10);

    })
    return promise;
    }
    function myFrenchToast(){
        let promise = new Promise (function(resolve, reject){
        setTimeout(()=>{
            console.log("Now prepare a FreanchToast for me");
            resolve("your Toast is ready");

        }, 20)
     } )
     return promise;
     }
     function myCoffe(){
         let promise = new Promise(function(resolve, reject)
         {
             setTimeout(()=>{
                 console.log("I need a Coffee")
                 resolve("your coffe is ready")
             }, 30)
         })
         return promise;
     }

     function myBreakfast(data){
         let promise = new Promise(function(resolve, reject){
            
             setTimeout(()=>{
                 
                 console.log("I want my BreakFast on Table at 9:00 AM in morning note it");
                 resolve("i'll try my best to prepare your breakfast according to your requirements");
              
            
            }, 40)
         })
         return promise;
     }
    let promise = myFood()
    promise.then(function(value){
        console.log("Sir", value)
        return myFrenchToast();
       
    })
    .then(function(value){
        console.log("Sir ", value);
        return myCoffe();
       
    })
    .then(function(value){
        console.log("Sir ", value);
        return myBreakfast();
    })
    .then(function(value){
        console.log("Dont Worry Sir", value)
    })
    .catch(function (error){
        console.log("Error = ",error);
    });

    console.log("Please inform me when Dinner is ready sir")