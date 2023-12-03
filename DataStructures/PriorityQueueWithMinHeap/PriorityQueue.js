class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(item, priority){
        let newNode = new Node(item, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        var lastIndex = this.values.length-1;
        var element = this.values[lastIndex];
        console.log("Last Index:",this.values[lastIndex],"and Parent Index",this.values[parentIndex]);
        while(lastIndex > 0){
            var parentIndex = Math.floor((lastIndex-1) / 2);
            var parent = this.values[parentIndex];
            if(element.priority <= parent.priority) break;
            this.swap(this.values, lastIndex, parentIndex);
            console.log("swapping",this.values[lastIndex],"and",this.values[parentIndex]);
            lastIndex = parentIndex;
        }
    }
    swap(arr, i, j){
        //console.log("permorning hot-swap");
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    dequeue(){
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
                if(leftChild.priority > element.priority)
                    swap = leftChildIndex;
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex];
                if  (
                        (swap ===  null && rightChild.priority > element.priority)
                        || (swap!=null && rightChild.priority > leftChild.priority)
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
class Node {
    constructor(value, pri) {
        this.value = value;
        this.priority = pri;
    }
}

//lets say we are at a hospital
var mh = new PriorityQueue();
mh.enqueue("Cough and Cold",10);
mh.enqueue("small Covid",39);
mh.enqueue("Large Covid",42);
mh.enqueue("Headache",15);
mh.enqueue("Headache and bad throat",21);
mh.enqueue("Knee Injury",17);
mh.enqueue("Fucking Fracture",33);
//console.log("Extracted", mh.extractMax());

console.log(mh);

mh.dequeue();

console.log(mh);





