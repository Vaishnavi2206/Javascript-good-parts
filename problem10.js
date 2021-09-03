//write a function twice that takes binary func and returns unary that passes its arg to the binary function
function addTwoNumbers(x,y){
    return x+y;
}

function twice(addFunction){
    return function(x){
        return addFunction(x,x)
    }
}

let add=twice(addTwoNumbers)
console.log(add(11))
