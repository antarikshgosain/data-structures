function uniqueNumbers(arr){
    if(arr.length<=1){
        return arr.length;
    }
    var curr = arr[0];
    var counter = 1;
    var prev ;
    for (var num of arr){
        if(curr !== num && curr != prev){
            console.log(num,"is unique")
            counter++;
            prev = curr;
            curr = num;
            
        }
    }
    console.log("Count of Unique Numbers:",counter);
    return counter;
}
var array = [1,1,1,4,6,6,6,8,9,10,11,11,11]
uniqueNumbers(array)