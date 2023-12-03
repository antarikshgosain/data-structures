function isArraySquaredSame(arr1, arr2){

    //size of both arrays should be same
    if(arr1.length !== arr2.length){
        console.log ("ERROR : Arrays unequal");
        return;
    }

    var arr3 = new Array(arr2.length).fill(0);
    console.log("\nInitial")
    console.log("Array 1: ", arr1, "Array 2: ", arr2, "Array 3: ", arr3);
    
    for(var i=0; i<arr1.length ; i++){
 
        console.log("\nChecking for ",arr1[i]);
        var index = getIndexOfSquare(arr1[i],arr2,arr3);
        if(index>=0) {
            arr3[index] = 1;
        }
        
        console.log("Array 1: ", arr1, "Array 2: ", arr2, "Array 3: ", arr3);
    }

    var arr4 = new Array(arr2.length).fill(1);
    console.log("\nResults: ")
    console.log("Array3: ",arr3, "Array4: ",arr4);
    if(JSON.stringify(arr3)==JSON.stringify(arr4)){
        console.log("ARRAY SAME    <3");
    } else {
        console.log("ARRAY NOT SAME !");
    }

}

function getIndexOfSquare(num,arr2,arr3){
    for(var j=0 ; j<arr2.length ; j++){
        if(arr2[j]==num*num && arr3[j]==0){
            console.log("Found ",arr2[j]," at ",j)
            return j;
        } 
    }
    console.log("NOT Found ",arr2[j])
    return -1;
}

var doubleArray1 = [[5,1,3],[1,9,25]]; //true
var doubleArray2 = [[9,3,1,5,2],[25,81,4,1,9]]; //true
var doubleArray3 = [[1,1,3],[1,9]]; //false
var doubleArray4 = [[4,5,6],[16,25]]; //false
var doubleArray5 = [[4,5,6],[16,25,49]]; //false
var doubleArray6 = [[11],[121]]; //true

console.log("Time is: ",new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"}),"\n")
var test = doubleArray6 ;
isArraySquaredSame(test[0],test[1]);