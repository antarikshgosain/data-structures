function maxSubArraySum(arr, sub){
    if(arr.length<sum){
        console.log("this cane be happenin");
        return -1;
    }
    var sum = 0 ;
    var tempSum = 0;
    for ( var i=0 ; i<sub ; i++ ) {
        tempSum += arr[i];
    }
    console.log("initial tempSum set to",tempSum);
    sum = tempSum;

    for ( var i=sub ; i<arr.length ; i++ ){
        console.log("i is",i,"with value",arr[i]);
        
        tempSum = tempSum + arr[i] - arr[i-sub]
        if(tempSum>sum){
            sum = tempSum;
            console.log("New sum is",sum);
        }
    }
    return sum;
}

array = [66,1,5,7,3,7,9,91]
subSize = 2;

console.log("Result",maxSubArraySum(array,subSize));