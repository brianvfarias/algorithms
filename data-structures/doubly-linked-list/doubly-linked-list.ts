class DLLNode {
  prev: null | DLLNode;
  value: any;
  next: null | DLLNode;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DLLNode | null;
  tail: DLLNode | null;
  len: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  add(val) {
    let added = new DLLNode(val);
    if (this.head === null) {
      this.head = added;
      this.tail = added;
    } else {
      this.tail!.next = added;
      added.prev = this.tail;
      this.tail = added;
    }
    this.len++;
    return this;
  }
}
