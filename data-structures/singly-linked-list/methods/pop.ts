import { SLLNode } from "./singly-linked-list";

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
    // My solution
    // if (!this.head) {
    //   return;
    // }
    // if (this.len === 1) {
    //   let last = this.head;
    //   this.head = null;
    //   this.tail = null;
    //   this.len--;
    //   return last;
    // }
    // let current: SLLNode | null = this.head;
    // while (current) {
    //   if (current.next?.next === null) {
    //     let last = current.next;
    //     current.next = null;
    //     this.tail = current;
    //     this.len--;
    //     return last;
    //   }
    //   current = current.next;
    // }

    // Course's solution
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
  /*
  Although both solutions do the same thing
  the course's solution show a deeper understanding of the list itself
  as well as of the usage of loops 
  in the end, it is also better, since it is easier to mantain 
  once it does not have nested code!
  */
}

const list = new SinglyLinkedList();
console.log(list.add(5));
console.log(list.add(6));
console.log(list.add(7));
console.log(list.pop());
console.log(list);
