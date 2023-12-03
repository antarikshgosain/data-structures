function power(num,pow){
    if(pow === 0){
        return 1 ;
    }
    return num * power(num,pow-1);
}

var arr = [];
function factorial(num){
    if(num===1){
        return 1 ;
    }
    result = num * factorial(num-1)
    arr[num] = result;
    return result;
}

function productOfArray(arr){
    
}

//console.log(power(2,1));
//console.log(factorial(1));
console.log(productOfArray(2,3,4,5))
