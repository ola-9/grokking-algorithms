import bfs from '../src/60-breadth-first-search/bfs';
import Graph from '../src/60-breadth-first-search/Graph';

describe('breadth first search', () => {
  const graph1 = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'E', 'F'],
    E: ['C', 'D', 'F'],
    F: ['D', 'E'],
  };

  test('bsf', () => {
    expect(bfs(graph1, 'A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

  test('bfs starting from non-existent node', () => {
    expect(bfs(graph1, 'Z')).toEqual([]);
  });

  test('bfs starting from C', () => {
    expect(bfs(graph1, 'C')).toEqual(['C', 'A', 'E', 'B', 'D', 'F']);
  });
});

describe('bfs-Graph Class', () => {
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

  test('bsf on Class', () => {
    expect(graph.breadthFirstSearch('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

  test('bfs on Class starting from C', () => {
    expect(graph.breadthFirstSearch('C')).toEqual(['C', 'A', 'E', 'B', 'D', 'F']);
  });

  test('bfs on Class starting from non-existent node', () => {
    expect(graph.breadthFirstSearch('Z')).toEqual([]);
  });
});
