// XHR (xml http request)
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// step 1;
// console.log(xhr)
xhr.open("GET",url);
// console.log(xhr.readyState)

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState)
    if(xhr.readyState===4){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data[0])
        document.write(data[0])
    }
    
}

xhr.send();