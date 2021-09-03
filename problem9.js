//Write demethodize,a function that converts a method to a binary function
function addTwoNumbers(x,y){
    return x+y;
}

function methodize(addFunction){
    return function(y){
        return addFunction(this,y)
    }
}

function demethodize(func){
    return function(that,y){
        return func.call(that,y);
    }
}

Number.prototype.add=methodize(addTwoNumbers)
// console.log(typeof Number.prototype.add)
console.log(demethodize(Number.prototype.add)(3,4))