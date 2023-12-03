function binarySearch(arr, num){
    console.log(arr);
    var result = search(arr,0,arr.length-1,num);
    console.log("result",result);
    return result ;
}

function search(arr, start, end, num){
    
    var mid = Math.floor((start+end)/2);
    console.log("start:",start,"end:",end,"mid:",mid,"num:",num);
    console.log("arr[mid]:",arr[mid])
    if(start>=end){
        return -1;
    } else
    if(arr.length<1 && arr[mid]!==num){
        return -1;
    } else if (arr[mid]===num){
        console.log("returning",mid);
        return mid;
    } else if (arr[mid]>num){
        return search(arr,start,mid-1,num);
    } else if (arr[mid]<num) {
        return search(arr,mid+1,end,num);
    } else {
        return -1;
    }
}



//console.log(binarySearch([5,6,10,13,14, 18,30,34,35,37, 40,44,64,79,84, 86,95,96,98,99], 95)) //16
console.log(binarySearch([1,2,3,4,5], 6)) //16