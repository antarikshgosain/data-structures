
function swap (arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivot(arr, start=0, end=arr.length-1){
    var pivot = arr[start] ;
    var swapIndex = start ;
    for(var i=start+1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
        }
    }
    swap(arr,swapIndex,start);
    console.log("Returning:",arr);
    return swapIndex;
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left<=right){
        let pivotIndex = pivot(arr, left, right);
    
        //left
        quickSort(arr, left, pivotIndex-1);

        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}



var array = [6,3,8,1,5,9,10,2,4]
console.log("Final",quickSort(array));
