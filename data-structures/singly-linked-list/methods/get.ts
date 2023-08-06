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
    // My implementation
    // This time mine is not commented cause I liked it better (both work, anyhow)
    if (index < 0 || index >= this.len) return null;
    if (index === 0) return this.head?.val;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node?.next ? node?.next : null;
    }
    return node;

    //  Course implementation
    // if (index < 0 || index >= this.len) return null;
    // let counter = 0;
    // let current = this.head;
    // while (counter !== index) {
    //   current = current?.next;
    //   counter++;
    // }
    // return current;
  }
}

const list = new SinglyLinkedList();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list);
console.log(list.get(1));
