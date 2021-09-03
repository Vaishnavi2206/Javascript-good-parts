//Write a function compose that takes two binary functions and returns a function that calls them both


function addTwoNumbers(x,y){
    return x+y;
}

function multiplyTwoNumbers(x,y){
    return x*y;
}

function composeFunctions(first,second){
    return function(x,y,z){
        return second(first(x,y),z)
    }
}

result=composeFunctions(addTwoNumbers,multiplyTwoNumbers)(2,3,5)
console.log(result)


