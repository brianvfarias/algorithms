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

  unshift(val) {
    let newHead = new DLLNode(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead!.next = this.head;
      this.head = newHead;
    }
    this.len++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.len) return null;
    if (index === 0) return this.head;
    if (index === this.len - 1) return this.tail;
    let midIndex = this.len / 2;
    let loop: DLLNode | null, key, count, increase;
    if (index > midIndex) {
      loop = this.tail;
      key = "prev";
      count = this.len - 1;
      increase = false;
    } else {
      loop = this.head;
      key = "next";
      count = 0;
      increase = true;
    }
    while (count !== index) {
      loop = loop![key] ? loop![key] : loop;
      count = increase ? count + 1 : count - 1;
    }
    return loop;
  }

  set(index, val) {
    let oldAtIndex = this.get(index);
    if (!oldAtIndex) {
      return false;
    }
    oldAtIndex!.value = val;
    return true;
  }

  insert(index, val) {
    // I got the organization of the code form the course's instructor!
    if (index < 0 || index > this.len) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.len) return !!this.add(val);

    let inserted = new DLLNode(val);
    let found = this.get(index - 1);
    let nextFromFound = found!.next;

    found!.next = inserted;
    inserted.prev = found;
    nextFromFound!.prev = inserted;
    inserted!.next = nextFromFound;
    this.len++;
    return true;
  }
}

const list = new DoublyLinkedList();
list.add("Dog");
list.add("Cat");
list.add("Koala");
list.add("Panda");
console.log(list);
console.log(list.insert(2, "Hamster"));
console.log(list.insert(0, "Owl"));
console.log(list);
