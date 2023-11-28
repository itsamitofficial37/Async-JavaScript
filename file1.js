// synchronous Programming vs Asynchronous Programming 

// synchronous Programming

/* console.log("Script Start ");

for(let i =0 ; i<10 ; i++){
    console.log("inside loop ")
}

console.log("script End here");

*/

// Asynchronous Programming

console.log("Script Start");

const id = setTimeout(()=> {
    console.log("Inside setTimeout");
}, 1000);

for(let i =0 ; i< 100; i++){
    console.log("For loop working ");
}

console.log("Script end here ");



