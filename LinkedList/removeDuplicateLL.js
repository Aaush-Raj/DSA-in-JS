
// REMOVE ALL DUPLICATE VALUES IN A LINKED LIST

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    addFirst(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    printNodes() {
      let currentNode = this.head;
      while (currentNode != null) {
        console.log(currentNode.value, "-->");
        currentNode = currentNode.next;
      }
    }
  
    deleteAllDuplicates() {
      let currentNode = this.head;
      while (currentNode.next != null) {
        if (currentNode.value == currentNode.next.value) {
          currentNode.next = currentNode.next.next;
          this.size--;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }
  
  const LL = new LinkedList();
  LL.addFirst(100);
  LL.addFirst(200);
  LL.addFirst(200);
  LL.addFirst(200);
  LL.addFirst(300);
  LL.addFirst(400);
  LL.addFirst(400);
  LL.addFirst(500);
  LL.addFirst(500);
  LL.addFirst(500);
  LL.printNodes();
  console.log("==============");
  LL.deleteAllDuplicates();
  LL.printNodes();
  