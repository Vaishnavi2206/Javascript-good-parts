//Write a function that takes an arg and returns a function that returns that arguement
function print(employeeId){
    return function (){
        return employeeId
    }
}

console.log(print(3)())