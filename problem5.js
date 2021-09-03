//Write a function that takes a binary function and makes it callable with two invocations

function addTwoNumbers(x,y){
    return x+y;
}

function add(addTwoNumbers){
    return function addFirst(x){
        return function addSecond(y){
            return addTwoNumbers(x,y)
        }
    }
}

console.log(add(addTwoNumbers)(10)(4))
