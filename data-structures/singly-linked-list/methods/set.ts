export class SLLNode {
  val: any;
  next: SLLNode | null;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SLLNode | null;
  tail: SLLNode | null;
  len: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  add(val) {
    let aux = new SLLNode(val);
    if (!this.head) {
      this.head = aux;
      this.tail = this.head;
    } else {
      this.tail.next = aux;
      this.tail = aux;
    }
    this.len++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.len--;
    if (this.len === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let aux = this.head;
    this.head = aux?.next;
    this.len--;
    if (this.len === 0) {
      this.tail = null;
    }
    return aux;
  }

  unshift(val) {
    let newHead = new SLLNode(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.len++;

    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.len) return null;
    if (index === 0) return this.head;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node?.next ? node?.next : null;
    }
    return node;
  }

  set(index, value) {
    let current = this.get(index);
    if (!current) {
      return false;
    }
    current.val = value;
    return true;

    // My implementation was slightly different from the course's instructor
    // but there is no need to recreate it here, since both have, fundamentally, the same logic
  }
}

const list = new SinglyLinkedList();
list.add("Zero");
list.add("One");
list.add("Two");
console.log(list);

console.log(list.get(0));
console.log(list.set(0, "five"));
console.log(list.get(0));

console.log(list.get(2));
console.log(list.set(2, "eight"));
console.log(list.get(2));

console.log(list);
console.log(list.set(-1, "Minus One"));
