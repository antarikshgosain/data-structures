class MaxHeap {
    constructor(){
        this.values = [];
    }
    insert(item){
        this.values.push(item);
        this.bubbleUp();
    }
    bubbleUp(){
        var lastIndex = this.values.length-1;
        var parentIndex = Math.floor((lastIndex-1) / 2);
        console.log("Last Index:",this.values[lastIndex],"and Parent Index",this.values[parentIndex]);
        while(this.values[lastIndex]>this.values[parentIndex]){
            this.swap(this.values, lastIndex, parentIndex);
            console.log("swapping",this.values[lastIndex],"and",this.values[parentIndex]);
            lastIndex = parentIndex;
            parentIndex = Math.floor((lastIndex-1) / 2);
            console.log("New Last Index:",this.values[lastIndex],"New Parent Index",this.values[parentIndex]);
        }
    }
    swap(arr, i, j){
        //console.log("permorning hot-swap");
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    extractMax(){
        var max = this.values[0];
        var end = this.values.pop();
        if(this.values.length > 0 ){
            this.values[0] = end;
            this.sinkDown();
        }
        
        return max;
    }
    sinkDown(){
        var index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(2>1){
            var leftChildIndex = 2 * index + 1 ;
            var rightChildIndex = 2 * index + 2 ;
            var leftChild = null , rightChild = null ;
            var swap = null ;
            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex];
                if(leftChild > element)
                    swap = leftChildIndex;
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if  (
                        (swap ===  null && rightChild > element)
                        || (swap!=null && rightChild > leftChild)
                    ) {
                    swap = rightChildIndex;
                }
                    

            }
            if(swap === null) break ;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

    }
}
var mh = new MaxHeap();
mh.insert(55);
mh.insert(39);
mh.insert(42);
mh.insert(15);
mh.insert(21);
mh.insert(17);
mh.insert(33);
mh.insert(7);
mh.insert(41);
console.log("Extracted", mh.extractMax());

console.log(mh);






