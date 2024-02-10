class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  breadthFirstSearch(startingNode) {
    if (!this.adjacencyList[startingNode]) {
      return [];
    }
    const queue = [startingNode];
    const result = [];
    const visited = {};
    visited[startingNode] = true;

    while (queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode);

      this.adjacencyList[currentNode].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// console.log(graph);
// массив, представляющий порядок обхода узлов графа, начиная с узла A:
// console.log(graph.breadthFirstSearch("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// массив, представляющий порядок обхода узлов графа, начиная с узла C:
// console.log(graph.breadthFirstSearch("C")); // Output: [ 'C', 'A', 'E', 'B', 'D', 'F' ]

export default Graph;
