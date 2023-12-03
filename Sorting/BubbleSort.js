//var array = [32,45,65,83,11,76,34,21];
var array = [30,45,10,20,35];
function bubbleSort(arr) {
    for(var i=0; i<arr.length; i++) {
        console.log('\nRound',i+1);
        console.log('i:',i)
        for(var j=0; j<i; j++) {
            console.log('Comparing',arr[j],'with',arr[i]);
            if(arr[j]>arr[i]){
                console.log('=> Swapping',arr[i],'with',arr[j]);
                var temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
            console.log('Array:',arr);
        }
    }
}
function swap(i,j,arr){

}

bubbleSort(array);
console.log('\nPost Sorting:');
console.log(array);