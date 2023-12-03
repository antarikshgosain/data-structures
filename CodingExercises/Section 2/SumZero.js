function sumZero(arr){
    var result = 999999;
    var head = 1;
    var tail = 0;
    for(var i=0; i<arr.length-1; i++){
        var sum = arr[head]+arr[tail];
        if(sum===0){
            return true;
        } 
        
    }
}

var array = [-3, -2, -1, 0, 1, 3, 5, 7]
console.log("RESULT")
sumZero(array);