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
      this.tail!.next = aux;
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
  }

  insert(index, value) {
    if (index < 0 || index > this.len) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.len) return !!this.add(value);
    let newAtIndex = new SLLNode(value);
    let previousIndex = this.get(index - 1);
    let nextIndex = previousIndex!.next;
    previousIndex!.next = newAtIndex;
    console.log(nextIndex);
    newAtIndex!.next = nextIndex;
    this.len++;
    return true;
  }

  remove(index) {
    // surprisingly both implementations were exactly the same
    // I'll just say that hahaha
    if (index < 0 || index >= this.len) return undefined;
    if (index === 0) return this.shift();
    if (index === this.len) return this.pop();
    let previousIndex = this.get(index - 1);
    let removed = previousIndex!.next;
    previousIndex!.next = removed!.next;
    this.len--;
    return removed;
  }
}

const list = new SinglyLinkedList();
list.add("First");
list.add("Second");
list.add("Third");
list.add("Fourth");
console.log(list);
console.log(list.remove(-1));
console.log(list.remove(5));
console.log(list.remove(0));
console.log(list);
