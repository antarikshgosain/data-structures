function getDigit(num, pos){
    var divisor = Math.pow(10,pos);
    var result = (Math.floor(num/divisor))%10;
    console.log("Digit of Number",num,"at position",pos,":",result);
    return result;
}

function countDigit(num){
    console.log("Counting for",num);
    if(num<1){
        return 1;
    }
    for(var i=0; ; i++) {
        var divisor = Math.pow(10,i);
        if(num/divisor<10){
            return i+1;
        }
    }
}

function mostDigits(arr){
    var most = -Infinity;
    for(var num in arr){
        var count = countDigit(arr[num]);
        if(count > most){
            most = count;
        }
    }
    return most;
}

function radixSort(arr){
    var maxDigits = mostDigits(arr);
    var bucket = [[],[],[],[],[], [],[],[],[],[]];
    for(var i=0; i<maxDigits; i++){
        for(var j=0; j<arr.length; j++){
            var digit = getDigit(arr[j],i);
            bucket[digit].push(arr[j]);
            console.log("Bucket:",bucket);
        }
        console.log("\nEnd of i",i);
        var newarr = [];
        newarr = [].concat(...bucket);
        arr = newarr;
        bucket = [[],[],[],[],[], [],[],[],[],[]];
    }
    return arr;
}

var array = [75,23,44,8,11,20,666,3412,7564,123,453,5431,3];
// console.log("Get Digit:",getDigit(3456789,2));
// console.log("Count Digit:",countDigit(142332));
// console.log("Most Digit:",mostDigits(array));
console.log("FINAL RADIX SORT",radixSort(array));