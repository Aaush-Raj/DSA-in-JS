class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initially, the list is empty
    this.size = 0;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addLast(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    console.log(currentNode);
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addFirst(100);
list.addFirst(200);
list.addFirst(300);
list.addLast(10202);

list.printList();

