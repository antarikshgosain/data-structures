function averagePair(arr, num){
    if(arr.length<=1){
        return false;
    }
    var head = 0;
    var tail = arr.length-1;
    var loop = true;
    while(loop){
        var avg = (arr[head]+arr[tail]) / 2 ;
        console.log(head,tail)
        console.log("Comparing",avg);
        if(avg===num){
            return true;
        }
        if(head >= tail){
            return false;
        }
        if(avg > num){
            tail-- ;
        }
        if(avg < num){
            head++ ;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6],4.1)); // false
console.log(averagePair([],4)); // false