function counterFactory(count){
    return counter={
        count:count,
        increment(){
            return count+=1
        }
        ,
        decrement(){
            return count-=1
        }
        ,
        reset(){
            return count=0
        }
    }
}
counter=counterFactory(10)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.increment())
console.log(counter.decrement())