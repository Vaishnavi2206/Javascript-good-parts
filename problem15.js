/*Make a function revocable that takes a nice function and returns a revoke function that denies access to the 
nice function that can invoke the nice function until it is revoked*/

function nice(){
   console.log("hi")
}

function revocable(inputFunction){
return{
    invoke(){
        return inputFunction.apply(this, arguments);
    },
    revoke(){
        inputFunction=null
    }
}
}

ans=revocable(nice);
ans.invoke()
ans.revoke()
// ans.invoke()