// 双向链表节点类
class DLinkedNode {
  constructor(key, value) {
    this.key = key; // 存储键
    this.value = value; // 存储值
    this.prev = null; // 前驱指针
    this.next = null; // 后继指针
  }
}

// LRU缓存对象
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // 缓存容量
    this.size = 0; // 当前缓存大小
    this.cache = new Map(); // 哈希表：键 -> 节点映射

    // 创建虚拟头尾节点（哨兵节点）
    this.head = new DLinkedNode(-1, -1); // 虚拟头节点
    this.tail = new DLinkedNode(-1, -1); // 虚拟尾节点

    // 连接头尾节点形成空链表
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * 获取缓存值
   * @param {number} key
   * @return {number}
   */
  get(key) {
    // 1. 检查键是否存在
    if (!this.cache.has(key)) return -1;

    // 2. 获取节点并更新为最近使用
    const node = this.cache.get(key);
    this.moveToHead(node); // 将节点移到链表头部

    // 3. 返回值
    return node.value;
  }

  /**
   * 添加或更新缓存
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    // 场景1: 键已存在（更新值）
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value; // 更新值
      this.moveToHead(node); // 移到头部标记为最近使用
      return;
    }

    // 场景2: 键不存在（创建新节点）
    const newNode = new DLinkedNode(key, value);

    // 添加到哈希表和链表头部
    this.cache.set(key, newNode);
    this.addToHead(newNode); // O(1) 添加到头部
    this.size++;

    // 检查容量是否超出
    if (this.size > this.capacity) {
      const removed = this.removeTail(); // 移除LRU节点
      this.cache.delete(removed.key); // 从哈希表删除
      this.size--;
    }
  }

  // ===== 链表操作辅助方法 =====

  /**
   * 添加节点到链表头部
   * @param {DLinkedNode} node
   */
  addToHead(node) {
    // 新节点连接前后节点
    node.prev = this.head;
    node.next = this.head.next;

    // 前后节点连接新节点
    this.head.next.prev = node;
    this.head.next = node;
  }

  /**
   * 移除链表中的节点
   * @param {DLinkedNode} node
   */
  removeNode(node) {
    // 跳过当前节点直接连接前后节点
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  /**
   * 移动节点到链表头部
   * @param {DLinkedNode} node
   */
  moveToHead(node) {
    this.removeNode(node); // 从当前位置移除
    this.addToHead(node); // 添加到头部
  }

  /**
   * 移除并返回尾部节点（LRU节点）
   * @return {DLinkedNode}
   */
  removeTail() {
    const node = this.tail.prev; // 尾部哨兵的前一个节点
    this.removeNode(node); // 移除该节点
    return node; // 返回被移除的节点
  }
}
