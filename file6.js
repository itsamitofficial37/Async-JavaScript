// function returning promise 

const bucket = ['coffee','chips','vegetables','salt','rice'];

function myFunc(){
    return new Promise((resolve, reject)=> {
        if(bucket.includes("vegetables")){
            resolve("Promise is resolved")
        }
        else{
            reject("Promise is rejected")
        }
    })
    
}

myFunc().then((e)=> {
    console.log(e)
}).catch((error)=> {
    console.log(error)
})
