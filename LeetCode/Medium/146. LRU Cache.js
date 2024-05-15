class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity; // 캐시의 용량
  this.cache = new Map(); // 키와 노드를 매핑하는 해시맵
  this.head = new ListNode(); // 더미 헤드 노드
  this.tail = new ListNode(); // 더미 테일 노드
  this.head.next = this.tail; // 더미 헤드의 다음은 더미 테일
  this.tail.prev = this.head; // 더미 테일의 이전은 더미 헤드
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // 키가 캐시에 존재하는 경우
    const node = this.cache.get(key); // 해당 키에 대한 노드 가져오기
    this.moveToHead(node); // 노드를 최근에 사용된 것으로 이동
    return node.value; // 값 반환
  } else {
    // 키가 캐시에 없는 경우
    return -1; // -1 반환
  }
};

/**
 * @param {ListNode} node
 */
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node); // 기존 위치에서 노드 제거
  this.addToHead(node); // 노드를 헤드에 추가하여 최근에 사용된 것으로 설정
};

/**
 * @param {ListNode} node
 */
LRUCache.prototype.removeNode = function (node) {
  const prevNode = node.prev; // 이전 노드 저장
  const nextNode = node.next; // 다음 노드 저장
  prevNode.next = nextNode; // 이전 노드의 다음을 다음 노드로 설정
  nextNode.prev = prevNode; // 다음 노드의 이전을 이전 노드로 설정
};

/**
 * @param {ListNode} node
 */
LRUCache.prototype.addToHead = function (node) {
  node.next = this.head.next; // 노드의 다음을 현재 헤드의 다음으로 설정
  node.prev = this.head; // 노드의 이전을 현재 헤드로 설정
  this.head.next.prev = node; // 현재 헤드의 다음 노드의 이전을 노드로 설정
  this.head.next = node; // 현재 헤드의 다음을 노드로 설정
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 키가 이미 캐시에 있는 경우
    const node = this.cache.get(key); // 해당 키에 대한 노드 가져오기
    node.value = value; // 노드의 값을 새로운 값으로 업데이트
    this.moveToHead(node); // 노드를 최근에 사용된 것으로 이동
  } else {
    // 키가 캐시에 없는 경우
    const newNode = new ListNode(key, value); // 새로운 노드 생성
    this.cache.set(key, newNode); // 캐시에 새로운 노드 추가
    this.addToHead(newNode); // 새로운 노드를 헤드에 추가하여 최근에 사용된 것으로 설정

    if (this.cache.size > this.capacity) {
      // 캐시 용량을 초과하는 경우
      const tailNode = this.tail.prev; // 테일 노드 가져오기
      this.removeNode(tailNode); // 가장 오래된 노드 제거
      this.cache.delete(tailNode.key); // 캐시에서 해당 키 삭제
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
