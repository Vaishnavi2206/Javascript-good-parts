//Write a function that add from two invocations

function addFirst(x){
    return function addSecond(y){
        return x+y
    }
}

console.log(addFirst(3)(4))