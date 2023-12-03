function recursiveRange(num){
    if(num===0){
        return 0;
    }
    return num + recursiveRange(num-1)
}

function fib(num){
    //console.log("num: ",num);
    if(num<=1){
        return num;
    }
    return fib(num-1) + fib(num-2);
}

//console.log(recursiveRange(6));
console.log(fib(7));
