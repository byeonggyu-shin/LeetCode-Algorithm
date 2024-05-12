/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  // 새로운 노드 생성 및 매핑
  const map = new Map(); // 기존 노드와 새로운 노드를 매핑하기 위한 맵
  let current = head;
  while (current) {
    map.set(current, new Node(current.val)); // 기존 노드와 새로운 노드를 매핑
    current = current.next;
  }

  // next와 random 포인터 설정
  current = head;
  while (current) {
    map.get(current).next = map.get(current.next); // next 포인터 설정
    map.get(current).random = map.get(current.random); // random 포인터 설정
    current = current.next;
  }

  return map.get(head); // 새로운 연결 리스트의 헤드 반환
};

var copyRandomList = function (head) {
  if (!head) return null;

  const oldToNew = new Map();

  let curr = head;
  while (curr) {
    oldToNew.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
    oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
    curr = curr.next;
  }

  return oldToNew.get(head);
};
