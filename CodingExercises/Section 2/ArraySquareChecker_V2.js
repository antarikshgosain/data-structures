function isArraySquaredSame(arr1, arr2){

    //size of both arrays should be same
    if(arr1.length !== arr2.length){
        console.log ("ERROR : Arrays unequal");
        return;
    }

    for(var i=0; i<arr1.length ; i++){
        arr1[i] = arr1[i] * arr1[i];                
    }
    console.log("Array 1: ", arr1, "Array 2: ", arr2);

    arr1.sort();
    arr2.sort();

    console.log("\nResults: ")
    console.log("Array1: ",arr1, "Array2: ",arr2);
    if(JSON.stringify(arr1)==JSON.stringify(arr2)){
        console.log("ARRAY SAME    <3");
    } else {
        console.log("ARRAY NOT SAME !");
    }

}


var doubleArray1 = [[5,1,3],[1,9,25]]; //true
var doubleArray2 = [[9,3,1,5,2],[25,81,4,1,9]]; //true
var doubleArray3 = [[1,1,3],[1,9]]; //false
var doubleArray4 = [[4,5,6],[16,25]]; //false
var doubleArray5 = [[4,5,6],[16,25,49]]; //false
var doubleArray6 = [[11],[121]]; //true

console.log("Time is: ",new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"}),"\n")
var test = doubleArray2 ;
isArraySquaredSame(test[0],test[1]);