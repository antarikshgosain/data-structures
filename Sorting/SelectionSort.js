function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function selectionSort(arr){
    for(var i=0; i<arr.length; i++){

        var min = arr[i];
        var minIndex = i;
        console.log("Min is set to:",min,"index:",minIndex);
        for(var j=i; j<arr.length; j++){
            if(arr[j]<min){
                min = arr[j];
                minIndex = j;
                console.log("New Min value:",arr[j],"at index:",j);
            }
        }
        if(i!=minIndex){
            console.log("swapping position",i,"with",minIndex);
            swap(arr,i,minIndex);
        }
        
        console.log("Array:",arr,"\n");
    }
}

//var array = [-5342,-4321,-2653,-1111,4,7,1,9,2,-55,450,12,635,-23,-5,3,0,0];
var array = [0,1,2,4,8,9,20,5]
console.log("Initial Array:",array);
selectionSort(array);