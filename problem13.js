//Write a function that allows another function to be called only once

function addTwoNumbers(x,y){
    return x+y;
}

function callOnce(inputFunction){
    return function(){
    let executed = inputFunction;
    inputFunction=null
    return executed.apply(this,arguments);
    }
}

result=callOnce(addTwoNumbers)
console.log(result(3,4))