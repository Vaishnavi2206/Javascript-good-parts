//Write methodize,a function that converts a binary function to a method

function addTwoNumbers(x,y){
    return x+y;
}

function methodize(addFunction){
    return function(y){
        return addFunction(this,y)
    }
}

Number.prototype.add=methodize(addTwoNumbers)
console.log((10).add(4))
