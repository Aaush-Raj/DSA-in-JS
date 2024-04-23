class CLLNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
    addFirst(value) {
      const newNode = new CLLNode(value);
      if (this.head === null) {
        this.head = this.tail = newNode; // List is empty, both head and tail point to newNode
        this.tail.next = this.head; // Circular link
      } else {
        newNode.next = this.head; // New node points to current head
        this.head = newNode; // Update head
        this.tail.next = this.head; // Maintain the circular structure
      }
      this.size++;
    }
  
  
    addLast(value) {
      const newNode = new CLLNode(value);
      if (this.tail === null) {
        this.head = this.tail = newNode; // List is empty, same as addFirst
        this.tail.next = this.head; // Circular link
      } else {
        this.tail.next = newNode; // Current tail points to new node
        this.tail = newNode; // Update tail
        this.tail.next = this.head; // Maintain the circular structure
      }
      this.size++;
    }
  
    deleteFirst() {
      if (this.head === null) {
        return; // List is empty, nothing to delete
      }
  
      if (this.head === this.tail) {
        this.head = this.tail = null; // Only one element, list becomes empty
      } else {
        this.head = this.head.next; // Move head to the next node
        this.tail.next = this.head; // Update tail.next to maintain circular structure
      }
      this.size--;
    }
    deleteLast() {
      if (this.tail === null) {
        return; // List is empty
      }
  
      if (this.tail === this.tail.next) {
        this.head = this.tail = null; // Only one element, list becomes empty
      } else {
        let current = this.head;
        while (current.next !== this.tail) { // Find the second-to-last node
          current = current.next;
        }
        this.tail = current; // Update tail to second-to-last
        this.tail.next = this.head; // Maintain circular structure
      }
      this.size--;
    }
  
    printList() {
      if (this.head === null) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.value);
        current = current.next;
      } while (current !== this.head); // Loop until back to the head
    }
  
  
    //Inserting and deleting at an INDEX (except index 0 and last index of LL) in circularLL is almost same as simple LL because the only difference is on Tail in CLL otherwise its all same as LL
  
    insertAtIndex(value, index) {
      if (index < 0 || index > this.size) {
        throw new Error("Index out of bounds");
      }
  
      if (index === 0) {
        this.addFirst(value); // Special case for index 0
      } else if (index === this.size) {
        this.addLast(value); // Special case for the end
      } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next; // Traverse to the node before the insertion point
        }
        const newNode = new CLLNode(value, current.next); // Create a new node
        current.next = newNode; // Insert the new node
        this.size++;
      }
    }
  
  }
  