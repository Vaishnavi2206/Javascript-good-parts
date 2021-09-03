//Write a function compose that takes two unary functions and returns a unary function that calls them both

function print(x){
    return x
}

function square(x){
    return Math.pow(x, 2)
}

function compose(first,second){
    return function(x){
        return second(first(x));
    }
}

console.log(compose(print,square)(3))