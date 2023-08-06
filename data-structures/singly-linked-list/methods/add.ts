import { SLLNode } from "../singly-linked-list";

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
    // My own implementation
    // if (!this.head) {
    //   this.head = aux;
    //   this.tail = aux;
    // } else if (this.len === 1) {
    //   this.tail = aux;
    //   this.head.next = this.tail;
    // } else {
    //   let aux = new SLLNode(val);
    //   let currentTail = this.tail;
    //   currentTail.next = aux;
    //   this.tail = aux;
    //   return this
    // }

    // course's solution
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
}

const list = new SinglyLinkedList();
console.log(list.add(79));
console.log(list.add(82));
console.log(list.add(86));
console.log(list.add(91));
