/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.data = new Map();
    this.size = this.data.size;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
    if (this.data.has(key)) {
        var val = this.data.get(key);
        this.data.delete(key);
        this.data.set(key, val);
        this.size = this.data.size;
        return val;
    } else {
        return -1;
    }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
    if (this.data.has(key)) {
        this.data.delete(key);
        this.size = this.data.size;
    } 
    if ((this.size + 1) > this.capacity) {
        this.data.delete(this.data.keys().next().value);
    }
    this.data.set(key, value);
    this.size = this.data.size;
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/