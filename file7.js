// promise && setTimeout 
// I want to resolve/ reject promise after 2 seconds
const bucket = ['coffee','chips','vegetables','salt','rice'];

function myPromise(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(bucket.includes("vegetables")){
                resolve("Promise is resolved")
            }else{
                reject("Promise is rejected")
            }
            
        }, 2000)
    })
}

// consume 

myPromise().then((result)=> {
    console.log(result);
}).catch((error)=>{
    console.log(error);
})