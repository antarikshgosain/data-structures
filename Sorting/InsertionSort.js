function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function selectionSort(arr){
    for(var i=1; i<arr.length; i++){
        
        for(var j=0; j<i; j++){
            console.log("Now comparing ",i,"and",j);
            if(arr[i]<arr[j]){
                console.log("swapping position",i,"with",j);
                swap(arr,i,j);
                console.log(arr);
            }
            

            
        }
        console.log(arr,"\n");
    }
}


//var array = [-5342,-4321,-2653,-1111,4,7,1,9,2,-55,450,12,635,-23,-5,3,0,0];
var array = [7,4,3,8,1]
//var array = [1,2,4,5,6,3,19,11,90,43,65,55];
console.log("Initial Array:",array);
selectionSort(array);