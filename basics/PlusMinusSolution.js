//This Function returns the average of:
//Negative numbers
//Positive numbers
//Zeros

var arr = [1, 2, 3, 4, -2, -4, -5, 0]

function plusMinus(arr) {
    let negative = 0
    let positive = 0
    let zero = 0
    // Write your code here
    for(let x in arr){
        if(arr[x] < 0){
            negative++
        }else if(arr[x] == 0){
            zero++
        }else{
            positive++
        }
    }
    console.log(`${(positive/(arr.length)).toFixed(6)}`)
    console.log(`${(negative/arr.length).toFixed(6)}`)
    console.log(`${(zero/arr.length).toFixed(6)}`)
}

plusMinus(arr)

