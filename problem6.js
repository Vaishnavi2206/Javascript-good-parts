//Write a function that takes a function and an arguement and returns a function that can supply a second arguement

function addTwoNumbers(x,y){
    return x+y;
}

function curry(addTwoNumbers,x){
    return function(y){
        return addTwoNumbers(x,y);
    }
}

add=curry(addTwoNumbers,3)
console.log(add(4))