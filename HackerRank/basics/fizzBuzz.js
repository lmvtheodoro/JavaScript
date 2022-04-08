//This Function returns:
// Number
// Fizz if it is multiple of 3
// Buzz if it is multiple of 5
// FizzBuzz if multiple of both 3 and 5
var n = 30;
function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <= n; i++){
        if(Number.isInteger(i/5) && Number.isInteger(i/3)){
            console.log('FizzBuzz')
        }else if(Number.isInteger(i/3)){
            console.log('Fizz')
        }else if(Number.isInteger(i/5)){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(n)

