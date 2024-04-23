//INSERT AT AN INDEX OF LINKED LIST WITH A RECURSIVE FUNCTION:::

class Node {
  constructor(data, next = null) {
    this.data = data;
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
      console.log(currentNode.data, "-->");
      currentNode = currentNode.next;
    }
  }

  insertAtIndex(value, index) {
    if (index == 0) {
      this.addFirst(value);
      return;
    }
    const newNode = new Node(value);
    insert_through_recursion(this.head, newNode, index);
  }
}

function insert_through_recursion(currentNode, newNode, position) {
  if (position == 1) {
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return;
  }

  if (currentNode.next) {
    return insert_through_recursion(currentNode.next, newNode, position - 1);
  }
}

const LL = new LinkedList();
LL.addFirst(100);
LL.addFirst(200);
LL.addFirst(300);
LL.addFirst(400);
LL.addFirst(500);
LL.printNodes();
console.log("==============");
LL.insertAtIndex("AAUSH", 2);
LL.printNodes();
