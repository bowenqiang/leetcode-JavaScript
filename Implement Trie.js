var TrieNode = function(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
}

TrieNode.prototype.getWord = function() {
    var word = '';
    var node = this;
    while (node !== null) {
        word = `${node.key}${word}`;
        node = node.parent;
    }
    return word;
}
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node = this.root;
    for (var i = 0; i < word.length; ++i) {
        var char = word[i];
        if (!node.children[char]) {
            node.children[char] = new TrieNode(char);
            node.children[char].parent = node;
        }
        node = node.children[char];
        if (i === (word.length - 1)) {
            node.end = true;
        }
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var node = this.root;
    for (var i = 0; i < word.length; ++i) {
        var char = word[i];
        if (node.children[char]) {
            node = node.children[char];
        } else {
            return false;
        }
    }
    return node.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var node = this.root;
    for (var i = 0; i < prefix.length; ++i) {
        var char = prefix[i];
        if (node.children[char]) {
            node = node.children[char];
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */