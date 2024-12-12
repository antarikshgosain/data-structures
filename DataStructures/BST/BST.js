class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        var node = new Node(value);
        if(!this.root) {
            this.root = node ;
            return this ;
        } else {
            var current = this.root;
            while(true){
                if(value===current.value) return undefined;
                if(value<current.value){
                    if(current.left === null){
                        current.left = node;
                        return this;
                    } else {
                        current = current.left ;
                    }
                }
                else if(value>current.value){
                    if(current.right === null){
                        current.right = node;
                        return this;
                    } else {
                        current = current.right ;
                    }
                }
                
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(!found && current){
            if (current.value === value) {
                found = true;
            } else if (value < current.value ) {
                current = current.left; 
            } else if (value > current.value ) {
                current = current.right;
            } 
        }
        return current!==null ? current : false ;
    }

    bfs(){
        var data = [];
        var queue = [] ;
        var node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            console.log("adding to data:",node.value);
            data.push(node.value);
            if(node.left) queue.push(node.left), console.log("pushin left",node.left.value);
            if(node.right) queue.push(node.right), console.log("pushin right",node.right.value);
        }
        return data;
    }

    dfsPreOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    dfsPostOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    dfsInOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    
}

var bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(5);
bst.insert(7);
bst.insert(9);
bst.insert(12);
bst.insert(20);
bst.insert(14);
bst.insert(18);

//console.log(bst); 

//console.log(bst.bfs());

console.log(bst.dfsInOrder());
