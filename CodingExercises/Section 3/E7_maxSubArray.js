function maxSubarraySum(arr, sub){
    if(sub>arr.length){
        return null;
    }
    //console.log(sub,arr[0])
    var start = 0 ;
    var end = 0 ;
    var tempSum = 0 ;
    var sum = 0 ;
    for (var i=0 ; i<sub ; i++) {
        tempSum += arr[i];
    }
    sum = tempSum;
    console.log("tempSum initial:",tempSum);
    for (var i=0 ; i<arr.length - sub ; i++){
        tempSum = tempSum - arr[i] + arr[i+sub];
        console.log("new temp Sum:", tempSum);
        if(tempSum > sum){
            sum = tempSum;
        }
    }
    return sum;

}


console.log(maxSubarraySum ([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum ( [1,4,2, 10, 23,3,1,0,20], 4)) // 39
console.log(maxSubarraySum ([ -3,4,0, -2,6,-1], 2)) // 5
console.log(maxSubarraySum ([3, -2,7, -4, 1, -1,4, -2, 1], 2)) //5
console.log(maxSubarraySum ([2,3], 3)) // null