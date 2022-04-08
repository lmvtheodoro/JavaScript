//This Function Returns:
//Difference between the sum of both diagonal on squared multi-dimensional array.

//Squared Multidimensional Examples:
var arrExample = [
    [ 1, 2, 3, 4 ],
    [ 4, 5, 6, 5 ],
    [ 7, 8, 9, 7 ],
    [ 7, 8, 9, 7 ]
  ];

var arrExample2 = [
    [ 1, 2, 3, 4, 5, 6, 7 ],
    [ 4, 5, 6, 5, 7, 8, 9 ],
    [ 7, 8, 1, 7, 2, 6, 3 ],
    [ 7, 8, 9, 3, 5, 4, 1 ],
    [ 1, 3, 4, 2, 0, 7, 5],
    [ 1, 3, 4, 5, 50, 7, 5],
    [ 1, 3, 4, 5, 0, 7, 5]
];


function sumUpDiagonals(arr) {
   var sumDiagonals = {main: 0, second: 0}
   var arrLength = arr.length
   var result
 
   for (var i = 0; i < arrLength; i++) {
     sumDiagonals.main += arr[i][i];
     sumDiagonals.second += arr[i][arrLength-i-1];
   }
   if(sumDiagonals.main > sumDiagonals.second){
        result = sumDiagonals.main - sumDiagonals.second
   }else{
        result = sumDiagonals.second - sumDiagonals.main
   }
   return result
 }

 console.log(sumUpDiagonals(arrExample))