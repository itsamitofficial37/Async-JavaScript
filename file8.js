// Promise.resolve()

function myPromise(){
    return new Promise ((resolve, reject)=> {
        resolve("AMit");
    })
}

// consume 
myPromise().then((result)=> {
    console.log(result);
})

// Promise Chaining 

// then method always give  us promise 

// proof 

const myPromise2 = new Promise ((resolve, reject)=> {
    const value = "Baar"
    resolve(value);
})

myPromise2.then((result)=> {
    result += "Baar"
    return result
})
.then((results)=> {
    results += "Dekho"
    console.log(results)
})