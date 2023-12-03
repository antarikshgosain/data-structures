class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor() {
        this.head = null ;
        this.tail = null ;
        this.length = 0 ; 
    }
    push(item){
        var newNode = new Node(item);
        if(this.length === 0){
            this.head = newNode ;
            this.tail = newNode ;
        } else {
            this.tail.next = newNode ;
            newNode.prev = this.tail ;
            this.tail = newNode ;
        }
        this.length ++ ;
    }
    pop(){
        if(this.length === 0) return undefined;
        var poppedItem = this.tail ;
        if(this.length === 1){
            this.head = null ;
            this.tail = null ;
        } else {
            this.tail = poppedItem.prev ;
            this.tail.next = null;
            poppedItem.prev = null;
        }
        this.length -- ; 
        console.log("popped",poppedItem);
        return poppedItem ;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null ;
            this.tail = null ;
        } else {
            this.head = this.head.next ;
            this.head.prev = null ;
        }
        this.length -- ;
        oldHead.next = null ;
        return oldHead;
    }
    unshift(item){
        var newNode = new Node(item);
        if(this.length === 0){
            this.head = newNode ;
            this.tail = newNode ;
        } else {
            var currentHead = this.head ;
            currentHead.prev = newNode ;
            this.head = newNode ;
            this.head.next = currentHead ;
        }
        this.length ++ ;
    }
    traverse(){
        console.log("")
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
        console.log("");
    }
    get(index){
        //console.log("tryna get", index)
        if(this.length<0) return undefined;
        if(this.length===1) return this.head;
        if(this.length-1===index) return this.tail;
        var counter = 0;
        var curr = this.head;
        while(curr.next){
            
            if(index === counter){
                console.log("getting",curr.val);
                return curr;
            }
            curr = curr.next;
            counter++;
        }
    }
    set(index, item){
        if(index<0 && index>=this.length) return undefined;
        else {
            var setNode = this.get(index);
            setNode.val = item;
        }
    }
    insert(index, item){
        var node = new Node(item);
        if(index < 0 || index > this.length) return undefined;
        
        else if(this.length === 0){
            this.head = node ;
            this.tail = node ;
        }
        else if(index === 0){
            this.unshift(item);
        }
        else if(index === this.length - 1){
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node ;
        }
        else if(index === this.length){
            this.push(item);
        }
        else if(index > 0 && index < this.length -1 ){
            var prevNode = this.get(index - 1);
            var nextNode = this.get(index);
            node.prev = prevNode ;
            node.next = nextNode ;
            prevNode.next = node ;
            nextNode.prev = node ;
        }
        this.length++;
    }
    remove(index){
        //console.log("length",this.length);
        if(index < 0 || index>= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        var currentNode = this.get(index);
        if(index>0 && index<this.length-1){
            var prevNode = this.get(index-1);
            var nextNode = this.get(index+1);
            prevNode.next = nextNode;
            nextNode.prev = prevNode;    
            currentNode.prev = null, currentNode.next = null;
        }
        this.length -- ;
        return currentNode;
    }
}

var dll = new DoublyLinkedList;
dll.push("Hey");
dll.push("buddy");
dll.push("its");
dll.push("me");
dll.push("Mario");
dll.remove(-1);

dll.traverse();

