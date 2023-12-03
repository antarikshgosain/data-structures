function mergeArrays(array1, array2){
    var i=0;
    var j=0;
    var final = [];

    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            final.push(array1[i]);
            i++;
        }else{
            final.push(array2[j]);
            j++;
        }
    }
    while(i<array1.length){
        final.push(array1[i]);
        i++;
    }
    while(j<array2.length){
        final.push(array2[j]);
        j++;
    }
    return final;
}

function mergeSort(array){
    if(array.length <= 1){
        console.log("Array Ends",array);
        return array;
    }
    
    let mid = Math.floor(array.length/2);
    console.log("Array",array,"about to be divided at position",mid);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid,array.length));
    return mergeArrays(left,right);
    

}


// var array1 = [1];
// var array2 = [2];
//var array1 = [3,5,9];
//var array2 = [4,6];
//var array1 = [1,3,5,8,17];
//var array2 = [-5,-2,3,7,14,33];

//console.log(mergeArrays(array1, array2));

var arr = [24,4,12,8];
console.log("Finals:",mergeSort(arr));