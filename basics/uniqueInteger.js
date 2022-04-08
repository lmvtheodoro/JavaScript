//This Function returns the unique Integer (Not repeated)
var a = [1, 2, 3, 4, 4, 3, 2]

function lonelyinteger(a) {
    // Write your code here
    var newArr = []
    var repeatedIndex = []

    for(let x = 0; x < a.length; x++){
        if(!newArr.includes(a[x])){
            newArr[x] = a[x]
        }else{
            repeatedIndex[x] = a[x]
        }
    }

    for(let y in a){
        if(repeatedIndex.includes(a[y])){
            console.log(`Number ${a[y]} is repeated.`)
        }else{
            return a[y]
        }
    }

}

console.log(lonelyinteger(a))
