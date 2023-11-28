//  understanding callBacks

function myFunc(callBacks){
    console.log("function is doing task 1");
    callBacks();
}




myFunc(()=> {
    console.log("function is doing task 2");
});


// another Example 

function getTwoNumbersAndAdd(num1 , num2, callBacks){
    console.log(num1,num2);
    callBacks(num1, num2)
}

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

getTwoNumbersAndAdd(4,5,addTwoNumbers);
