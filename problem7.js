//write a inc function that increments by 1 in 3 ways from existing ones

function addTwoNumbers(number1,number2){
    return number1+number2;
}

//one
function add(addTwoNumbers){
    return function addFirst(x){
        return function addSecond(y){
            return addTwoNumbers(x,y)
        }
    }
}

//two
function incrementByOne(addTwoNumbers,x){
    return function(y){
        return addTwoNumbers(x,y);
    }
}

//three
function curry(addTwoNumbers,x){
    return function(y){
        return addTwoNumbers(x,y);
    }
}

//four
function addSecond(x){
    return function addFirst(){
       return x+1;
    }
}

console.log(add(addTwoNumbers)(10)(1))

add=incrementByOne(addTwoNumbers,7)
console.log(add(1))

add=curry(addTwoNumbers,3)
console.log(add(1))

result=addSecond(5)
console.log(result())




