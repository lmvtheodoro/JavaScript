//This Function returns the median of an array ( For both even and odd arrays )
//Example Arrays:
arr1 = [1, 2, 3, 4 ,5]
arr2 = [6, 7, 8, 9, 10, 11]
arr3 = [5, 2, 10, 5, 4, 9]

function findMedian(arr) {
    // Write your code here
    let newArr = arr.sort((a,b) => a - b)
    
    let size = newArr.length
    if((size%2) == 0){
        let size = Math.round(Number(newArr.length))
        let result = (arr[size/2] + arr[(size/2)-1]) / 2
        return result
    }else{ 
        if(size % 2 != 0){
            size -= 0.3
            var rounded = Math.round(size/2)
        }
        return newArr[rounded]
    }
}

console.log(findMedian(arr))

