function bfs(graph, startingNode) {
  if (!graph[startingNode]) {
    return [];
  }
  const queue = [startingNode];
  const result = [];
  const visited = {};
  visited[startingNode] = true;

  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode);

    graph[currentNode].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }

  return result;
}

export default bfs;

// const graph1 = {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A', 'E'],
//   D: ['B', 'E', 'F'],
//   E: ['C', 'D', 'F'],
//   F: ['D', 'E'],
// };

// console.log(bfs(graph1, 'A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
