//This function returns:
//This Function returns:
//Minimum Sum (Min Value + Array excepts Maximum Value)
//Maximum Sum (Max Value + Array excepts Minimum Value)
var arr = [1,10,50]
var arr2 = [50,100,150,200,250,300,350]
function minMaxSum(arr) {
    // Write your code here
    let lowerNumber = BigInt(999999999)
    let higherNumber = BigInt(0)
    let result = BigInt(0)

    for(let x in arr){
        arr[x] = BigInt(arr[x])
        if(arr[x] < lowerNumber){
            lowerNumber = arr[x]
        }
        if(arr[x] > higherNumber){
            higherNumber = arr[x]
        }
        result = BigInt(result + arr[x])
    }
    let minResult = BigInt(result - higherNumber)
    let maxResult = BigInt(result - lowerNumber)
    console.log(minResult+' '+(maxResult))
}

minMaxSum(arr2)