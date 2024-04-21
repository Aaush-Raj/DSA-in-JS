class DLLNode {
    constructor(value, previous = null, next = null) {
      this.value = value;
      this.previous = previous;
      this.next = next;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    addFirst(value) {
      const newNode = new DLLNode(value);
      if (this.head === null) {
        // If the list is empty, the new node is both the head and the tail
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head; // Connect new node to the current head
        this.head.previous = newNode; // Connect current head back to the new node
        this.head = newNode; // Update head to the new node
      }
      this.size++; // Increment the size of the list
    }
  
    addLast(value) {
      const newNode = new DLLNode(value);
      if (this.head === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode; // Set tail's next to the new node
        newNode.previous = this.tail; // Set new node's previous to the tail
        this.tail = newNode; // Update tail
      }
      this.size++;
    }
  
    addAtIndex(value, index) {
      if (index == 0) {
        this.addFirst(value);
      } else if (index == this.size) {
        this.addLast(value);
      } else {
        let temp = this.head;
        for (let i = 1; i < index; i++) {
          temp = temp.next;
        }
        // console.log("TEMP-->",temp)
        const newNode = new DLLNode(value);
        newNode.next = temp.next;
        newNode.previous = temp;
        temp.next.previous = newNode;
        temp.next = newNode;
      }
      this.size++;
    }
  
    deleteFirst() {
      if (this.head !== null) {
        this.head = this.head.next; // Move head to the next node
        if (this.head === null) {
          // If list becomes empty
          this.tail = null; // Update tail to null
        } else {
          this.head.previous = null; // Update new head's previous to null
        }
        this.size--; // Decrement size of the list
      }
    }
  
    deleteLast() {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.size--;
    }
  
    deleteAtIndex(index) {
      if (index == 0) {
        this.deleteFirst();
      } else {
        let temp = this.head;
        for (let i = 0; i < index; i++) {
          temp = temp.next; // Move to the node at the given index
        }
        temp.next.previous = temp.previous; // Update previous reference of the next node
        temp.previous.next = temp.next;
  
        this.size--;
      }
    }
  
    printDLL() {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value, "-->");
        currentNode = currentNode.next;
      }
      console.log("END");
    }
  }
  
  const DLL = new DoublyLinkedList();
  DLL.addFirst(100);
  DLL.addFirst(200);
  DLL.addFirst(300);
  DLL.addLast(50);
  DLL.addLast(20);
  DLL.printDLL();
  console.log("-----------");
  DLL.addAtIndex("AAUSH", 2);
  DLL.printDLL();
  console.log("--DEL---------");
  DLL.deleteFirst();
  DLL.printDLL();
  console.log("--DEL-LAST--------");
  DLL.deleteLast();
  DLL.printDLL();
  console.log("--DEL-AT--------");
  DLL.deleteAtIndex(1);
  DLL.printDLL();
  