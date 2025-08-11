/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.size = 0
  this.cache = new Map()

  this.head = new DLinkedNode(-1, -1) // 头指针
  this.tail = new DLinkedNode(-1, -1) // 尾指针
  this.head.next = this.tail
  this.tail.prev = this.head
};

var DLinkedNode = function (key, value) {
  this.key = key // 存储键
  this.value = value // 存储值
  this.prev = null
  this.next = null
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1

  const node = this.cache.get(key)
  this.moveToHead(node)
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 已经存在
  if (this.cache.has(key)) {
    const node = this.cache.get(key)
    node.value = value
    this.moveToHead(node)
    return
  }

  // 不存在
  const node = new DLinkedNode(key, value)

  // 添加到头部
  this.addToHead(node)
  this.cache.set(key, node)
  this.size++;

  // 检查是否超出
  if (this.size > this.capacity) {
    const removeNode = this.removeTailNode()
    this.cache.delete(removeNode.key)
    this.size--;
  }
};

// 节点加入头部
LRUCache.prototype.addToHead = function (node) {
  node.prev = this.head
  node.next = this.head.next

  this.head.next.prev = node
  this.head.next = node
}

// 删除节点
LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

// 移动节点到头部
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node)
  this.addToHead(node)
}

// 删除尾部节点
LRUCache.prototype.removeTailNode = function () {
  const tailNode = this.tail.prev
  this.removeNode(tailNode)
  return tailNode
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const l = new LRUCache(2)
l.put(1, 1)
l.put(2, 2)
console.log(l.get(1))
l.put(3, 3)
console.log(l.get(2))
