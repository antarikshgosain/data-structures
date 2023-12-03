class PriorityQueue{
    constructor (){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }        
    }
    addEdge(v1, v2, w){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push({node:v2, weight:w});
            this.adjacencyList[v2].push({node:v1, weight:w});
        }
    }
    dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        
        //build up initial state
        for(let v in this.adjacencyList){
            if(v === start) {
                distances[v] = 0 ;
                nodes.enqueue(v,0);
            } else {
                distances[v] = Infinity;
                nodes.enqueue(v,Infinity);
            }
            previous[v] = null;
        }

        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            console.log(smallest,"updated length:",nodes.values.length);
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbour in this.adjacencyList[smallest]){

                    let nextNode = this.adjacencyList[smallest][neighbour];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    
                    if(candidate < distances[nextNeighbour]){
                        distances[nextNeighbour] = candidate;
                        previous[nextNeighbour] = smallest;
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
graph.addVertex("Toronto");
graph.addVertex("Newyork");
graph.addVertex("Miami");
graph.addVertex("Madrid");
graph.addVertex("Rome");
graph.addVertex("Paris");
graph.addVertex("Chandigarh");
graph.addVertex("Delhi");
graph.addVertex("Mumbai");
graph.addEdge("Toronto","Delhi",12);
graph.addEdge("Toronto","Newyork",1);
graph.addEdge("Newyork","Miami",2);
graph.addEdge("Newyork","Delhi",10);
graph.addEdge("Newyork","Rome",7);
graph.addEdge("Newyork","Madrid",9);
graph.addEdge("Miami","Paris",6);
graph.addEdge("Madrid","Rome",2);
graph.addEdge("Rome","Paris",3);
graph.addEdge("Chandigarh","Delhi",1);
graph.addEdge("Chandigarh","Mumbai",5);
graph.addEdge("Delhi","Mumbai",2);
graph.addEdge("Mumbai","Paris",8);
graph.addEdge("Mumbai","Paris",8);

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A","B",4);
// graph.addEdge("A","C",2);
// graph.addEdge("B","E",3);
// graph.addEdge("C","D",2);
// graph.addEdge("C","F",4);
// graph.addEdge("D","E",3);
// graph.addEdge("D","F",1);
// graph.addEdge("E","F",1);


console.log(graph);

console.log(graph.dijkstra("Chandigarh","Toronto"));



