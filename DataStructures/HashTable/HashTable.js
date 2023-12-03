class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++ ){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        var index = this._hash(key);
        console.log("hash for",key,"is",index);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        
        return index;
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            var arrays = this.keyMap[index];
            for(var i = 0 ; i<arrays.length ; i++ ){
                if(arrays[i][0]===key)
                    return arrays[i][1];
            }
            return undefined;
        }
        return undefined;
    }
    values(){
        let values = [];
        for(var i=0 ; i<this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j=0 ; j<this.keyMap[i].length ; j++){
                    if(!values.includes(this.keyMap[i][j][1]))
                        values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
    keys(){
        let values = [];
        for(var i=0 ; i<this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j=0 ; j<this.keyMap[i].length ; j++){
                    if(!values.includes(this.keyMap[i][j][0]))
                        values.push(this.keyMap[i][j][0]);
                }
            }
        }
        return values;
    }
}
var ht = new HashTable(5);
ht.set("red","this is reddish-ly red");
ht.set("blue","de da baddaaayyyy");
ht.set("green","grass is greener on the other side");
ht.set("purple","lamborghini");
ht.set("black","all black everything everything");
ht.set("white","y nada mas, hala madrid");
ht.set("more white","y nada mas, hala madrid");
ht.set("yellow","dirty fellow");

console.log(ht);
console.log("All values",ht.values());

console.log(ht.get("white"));
console.log(ht.get("more white"));
console.log("All keys",ht.keys());