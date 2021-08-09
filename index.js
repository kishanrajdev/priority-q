class PriorityQueue {
  constructor (collection = [], comparator) {
    this.comparator = comparator;
    if (comparator === undefined) {
      this.comparator = (a, b) => {
        if (a < b) return -1
        else if (a > b) return 1;
        return 0;
      };
    }
    this.heap = collection;
    this.size = collection.length;
    this.createHeap();
  }

  static left(i) {
    return 2 * i + 1;
  }

  static right(i) {
    return 2 * i  + 2;
  }

  static parent(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  createHeap() {
    const nonLeaf = Math.floor(this.size / 2) - 1;

    for (let i = nonLeaf; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  bubbleDown(i) {
    if (i > Math.floor(this.size / 2) - 1) return;
    let currEle = this.heap[i];
    let left = PriorityQueue.left(i);
    let right = PriorityQueue.right(i);
    
    let newIndex = i;
    if (left < this.size && this.comparator(currEle, this.heap[left]) > 0) {
      currEle = this.heap[left];
      newIndex = PriorityQueue.left(i);
    }
    if (right < this.size && this.comparator(currEle, this.heap[right]) > 0) {
      currEle = this.heap[right];
      newIndex = PriorityQueue.right(i);
    }
    if (newIndex !== i) {
      this.swap(i, newIndex)
      this.bubbleDown(newIndex);
    }
  }

  bubbleUp(i) {
    while (i > 0) {
      let parent = this.heap[PriorityQueue.parent(i)];
      if (this.comparator(parent, this.heap[i]) > 0) {
        this.swap(i, PriorityQueue.parent(i));
      }
      i = PriorityQueue.parent(i);
    }
  }

  peek() {
    if (this.size <= 0) {
      throw new Error('no elements in PriorityQueue.')
    }
    return this.heap[0];
  }

  poll() {
    if (this.size === 0) {
      throw new Error('no elements in PriorityQueue.')
    }
    this.swap(0, this.size - 1);
    const top = this.heap.pop();
    this.size--;
    this.bubbleDown(0);
    return top;
  }

  add(ele) {
    this.heap.push(ele);
    this.size++;
    this.bubbleUp(this.size - 1);
  }
}

module.exports = PriorityQueue;
