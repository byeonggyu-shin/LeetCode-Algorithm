/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const clonedNodeMap = new Map(); // 기존 노드와 복제된 노드를 매핑할 맵
  const queue = []; // BFS를 위한 큐
  const clonedNode = new Node(node.val); // 주어진 노드를 복제하여 시작

  clonedNodeMap.set(node, clonedNode); // 초기 노드를 매핑에 추가
  queue.push(node); // 초기 노드를 큐에 추가

  while (queue.length > 0) {
    const current = queue.shift(); // 큐에서 현재 노드를 가져옴

    // 현재 노드의 이웃을 복제하고 매핑에 추가
    for (let neighbor of current.neighbors) {
      if (!clonedNodeMap.has(neighbor)) {
        const clonedNeighbor = new Node(neighbor.val);
        clonedNodeMap.set(neighbor, clonedNeighbor);
        queue.push(neighbor); // 이웃 노드를 큐에 추가
      }
      // 현재 노드의 복제본에 이웃을 추가
      clonedNodeMap.get(current).neighbors.push(clonedNodeMap.get(neighbor));
    }
  }

  return clonedNode;
};
