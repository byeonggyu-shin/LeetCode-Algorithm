var WordDictionary = function () {
  this.root = new TrieNode();
};

var TrieNode = function () {
  // 자식 노드들을 매핑하는 Map을 생성, 단어의 끝인지를 나타내는 플래그를 초기화
  this.children = new Map();
  this.isEndOfWord = false;
};
/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const char of word) {
    // 현재 문자가 자식 노드에 없으면 새로운 노드를 생성하여 추가
    if (!node.children.has(char)) {
      node.children.set(char, new TrieNode());
    }
    node = node.children.get(char);
  }
  // 단어의 끝에 도달하면 끝을 나타내는 플래그를 설정
  node.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.searchRecursive(word, this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

WordDictionary.prototype.searchRecursive = function (word, node, index) {
  // 인덱스가 단어의 길이와 같아지면 현재 노드가 단어의 끝인지 확인하여 반환
  if (index === word.length) {
    return node.isEndOfWord;
  }

  const char = word[index];
  if (char === ".") {
    // 현재 문자가 '.'이면 모든 자식 노드에 대해 재귀적으로 검색
    for (const childNode of node.children.values()) {
      if (this.searchRecursive(word, childNode, index + 1)) {
        return true;
      }
    }
    return false;
  } else {
    // 현재 문자가 '.'이 아니면 해당 문자에 대한 자식 노드가 있는지 확인하고 재귀적으로 검색
    if (!node.children.has(char)) {
      return false;
    }
    return this.searchRecursive(word, node.children.get(char), index + 1);
  }
};
