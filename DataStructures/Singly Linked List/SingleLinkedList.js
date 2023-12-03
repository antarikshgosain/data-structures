
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    getLength(){
        return this.length;
    }
    push(item){
        var node = new Node(item);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length ++ ;
        return this;
    }
    traverse(){
        console.log("Lets travel the world")
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
        console.log("");
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; 
        this.length -- ;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var node = this.head;
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length -- ;
        return node;
    }
    unshift(item){
        var newNode = new Node(item);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++ ;
        return this;
    }
    get(index){
        var i = 0;
        var current = this.head;
        while(current && index>=i && index>=0){
            if(i===index){
                console.log("gettin",current.val);    
                return current;
            }
            current = current.next;
            i++;
        }
    }
    set(index, value){
        var i = 0;
        var current = this.head;
        while(current && index>=i && index>=0){
            if(i===index){
                current.val = value;
                console.log("settin",current.val);    
            }
            current = current.next;
            i++;
        }
    }
    insert(index, value){
        if(index<0 || index>this.length) return undefined;
        if(index === this.length) this.push(value);
        if(index === 0) this.unshift(value);
        // core logic begins here
        
        var newNode = new Node(value);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length ++ ;
    }
    remove(index){
        if(index===0) this.shift() ;
        if(index===this.length-1) this.pop() ;
        if(index>=this.length) return undefined;
        if(index>0 && index<this.length-1){
            var prevItem = this.get(index-1);
            var nextItem = this.get(index+1);
            var removedItem = this.prevItem.next;
            
            prevItem.next = nextItem ;
            this.length -- ;
            return removedItem;
        }
        
    }
}



var list = new LinkedList();
list.push("hey");
list.push("how");;
list.push("are");
list.push("you?");
//list.insert(2,"good");
console.log(list.getLength());
list.remove(4);
list.traverse();
