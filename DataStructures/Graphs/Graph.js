class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }        
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(v1, v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(var city of this.adjacencyList[vertex]){
                console.log(city);
                this.adjacencyList[city] = this.adjacencyList[city].filter(v => v !== vertex);
            }
            delete(this.adjacencyList[vertex]);
        }
    }
    depthFirstTraversalRecursive(start){
        const result = [];
        const visited = {};
        const adjList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            console.log("New vertex visited",vertex,visited);
            visited[vertex] = true;
            result.push(vertex);
            adjList[vertex].forEach(element => {
                if(!visited[element]){
                    return dfs(element);
                }
            });
        })(start)
        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};

        visited[start] = true;
        while(stack.length){
            console.log(stack)
            let currentVertex = stack.pop();
            console.log("popped",currentVertex);
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach( item => {
                
                if(!visited[item]){
                    console.log("just visited",item);
                    visited[item] = true;
                    stack.push(item);
                }
            });
        }
        return result;
    }
    breadthFirstTraversal_naive(start){
        const result = [];
        const visited = {};
        var stack = [start];
        var queue = [];
        visited[start] = true;
        while(stack.length){
            var currentVertex = stack.pop();
            result.push(currentVertex);
            
            console.log(currentVertex," -> ",this.adjacencyList[currentVertex])
            this.adjacencyList[currentVertex].forEach(item => {
                if(!visited[item]){
                    visited[item] = true;
                    queue.push(item);
                }
            })
            if(!stack.length && queue.length){
                stack = queue;
                queue = [];
            }
            //console.log("stack",stack);
            //console.log("queue",queue);
            //console.log("result",result)
        }        
        return result;
    }
    breadthFirstTraversal(start){
        const queue = [start];
        const result = [];
        const visited = {};
        var current = null ;

        while(queue.length){    
            current = queue.shift();
            result.push(current);
            visited[current] = true;
            this.adjacencyList[current].forEach(item => {
                if(!visited[item]){
                    visited[item] = true;
                    queue.push(item);
                }
            })
        }
        return result;
    }
}

var graph = new Graph();
graph.addVertex("Toronto");
graph.addVertex("Newyork");
graph.addVertex("Miami");

graph.addVertex("Madrid");
graph.addVertex("Rome");
graph.addVertex("Paris");

graph.addVertex("Chandigarh");
graph.addVertex("Delhi");
graph.addVertex("Mumbai");

graph.addEdge("Toronto","Delhi");
graph.addEdge("Toronto","Newyork");
graph.addEdge("Newyork","Miami");
graph.addEdge("Newyork","Delhi");
graph.addEdge("Newyork","Rome");
graph.addEdge("Newyork","Madrid");
graph.addEdge("Miami","Paris");
graph.addEdge("Madrid","Rome");
graph.addEdge("Rome","Paris");
graph.addEdge("Chandigarh","Delhi");
graph.addEdge("Chandigarh","Mumbai");
graph.addEdge("Delhi","Mumbai");
graph.addEdge("Mumbai","Paris");

//console.log(graph);

//graph.removeEdge("Toronto","Delhi");
//graph.removeVertex("Delhi");

//console.log("DFS Travel Recursive", graph.depthFirstTraversalRecursive("Delhi"));

//console.log("DFS Travel Iterative", graph.depthFirstIterative("Delhi"));

console.log("BFS Travel Iterative", graph.breadthFirstTraversal("Chandigarh"));




