console.log("Before preparing food");
function myFood(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Prepare a Pizza for me");
            resolve("your pizza is ready");
        },10)
    })
        return promise;
}   

function myTea(){
    let promise = new Promise(function(resolve, reject){
            setTimeout(()=>{
            console.log("Preare a Cup of tEA FOR ME");
            resolve("your Tea is on the table")
        },20)

        })
        return promise;
    }
    function myJuice(){
        let promise = new Promise(function(resolve, reject){
            setTimeout(()=>{
                console.log("make a glass of lemon juice")
                resolve("your juice is ready")
            },30)
        })
        return promise;
    }
    async function startProcess(){
        try{
        let pizzavalue = await myFood();
        console.log("Sir", pizzavalue);
        let teavalue = await myTea();
        console.log("Sir", teavalue);
        let juicevalue = await myJuice();
        console.log("Sir", juicevalue);
        }
        catch(error) {
            console.log("Error in catch = ", error);
        }
    }


    startProcess();
    console.log("Dinner is ready")