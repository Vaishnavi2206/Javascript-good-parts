//Write a factory function that returns two functions that implement a up/down counter

function counterFunction(x){
    return {
        x:x,
        incrementCounter(){
            return x+=1
        }
        ,
        decrementCounter(){
            return x-=1
        }
    }
}

ans=counterFunction(10)
console.log(ans.incrementCounter())
console.log(ans.decrementCounter())