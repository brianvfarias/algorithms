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

  pop() {
    if (!this.tail) return;
    let oldTail = this.tail;
    if (this.len === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;
      newTail!.next = null;
      this.tail.prev = null;
      this.tail = newTail;
    }
    this.len--;
    return oldTail;
  }

  shift() {
    if (this.len === 0) return;
    let oldHead = this.head;
    if (this.len === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = oldHead?.next;
      oldHead!.next = null;
      newHead!.prev = null;
      this.head = newHead;
    }
    this.len--;
    return oldHead;
  }
}
