// Promise 

console.log("Script Start");

const bucket = ['coffee','chips','vegetables','salt','rice'];

// declaration of promise 

const friedRicePromise = new Promise((resolve, reject)=> {
    if(bucket.includes('vegetables') && bucket.includes("rice")&& bucket.includes("salt")){
        resolve("FriceRice Ready ")
    }else {
        reject("Cannot make fried Rice because item is not there");
    }
})

// how to consume promise 

friedRicePromise.then((myFriedRice)=> {
    console.log("lets Eat", myFriedRice);
})
.catch((error)=> {
    console.log(error)
})

// settimeout
setTimeout(()=> {
    console.log("I am amit")
}, 2000)
for(let i =0 ; i<2000; i++){
    console.log("hello World")
}

console.log("script End ");
