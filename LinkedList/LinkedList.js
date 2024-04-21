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

  addAtIndex(newValue, index) {
    if (index == 0) {
      addFirst(newValue);
    } else if (index == this.size) {
      addLast(newValue);
    } else {
      let temp = this.head;
      for (let i = 1; i < index; i++) {
        temp = temp.next;
      }

      const newNode = new Node(newValue, temp.next);
      temp.next = newNode;
      this.size++;
    }
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

  deleteFirst() {
    // let temp = this.head.next
    // this.head = temp

    //in one line
    if (this.head !== null) {
      this.head = this.head.next; // Move the head to the next node
      this.size--; // Decrement size of the list
    }
  }

  deleteLast() {
    let temp = this.head;
    // this.size-1 =  the seconds last index of LL
    for (let i = 0; i < this.size - 1; i++) {
      temp = temp.next;
    }
    temp.next = null;
  }


  deleteAtIndex(index) {
    if (index == 0) {
      this.deleteFirst();
    }

    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    this.size--;
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
