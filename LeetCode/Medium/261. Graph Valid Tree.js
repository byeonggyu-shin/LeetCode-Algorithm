/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  // 그래프를 인접 리스트로 변환
  const adjacencyList = new Map();
  for (let i = 0; i < n; i++) {
    adjacencyList.set(i, []);
  }
  for (const [a, b] of edges) {
    adjacencyList.get(a).push(b);
    adjacencyList.get(b).push(a);
  }

  // 방문한 노드를 기록하는 배열
  const visited = new Array(n).fill(false);

  // DFS로 사이클 여부 확인
  const hasCycle = (node, parent) => {
    visited[node] = true;
    for (const neighbor of adjacencyList.get(node)) {
      if (!visited[neighbor]) {
        if (hasCycle(neighbor, node)) {
          return true;
        }
      } else if (neighbor !== parent) {
        // 방문한 노드인데 부모 노드가 아닌 경우 사이클이 존재
        return true;
      }
    }
    return false;
  };

  if (hasCycle(0, -1)) {
    return false; // 사이클이 존재하면 유효한 트리가 아님
  }

  // 모든 노드가 연결되어 있는지 확인
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      return false; // 모든 노드가 연결되어 있지 않으면 유효한 트리가 아님
    }
  }

  return true;
};
