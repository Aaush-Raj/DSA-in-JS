class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      this.items.shift();
    }
    peek() {
      if (!this.isEmpty()) {
        console.log(this.items[0])
        return this.items[0];
      } else {
        
        return "Empty Queue...";
      }
    }
    size() {
      return this.items.length;
    }
    isEmpty() {
      return this.size() === 0;
    }
  
    printQueue(){
      let str = ""
      for(let i = 0; i<this.size();i++){
        str += this.items[i]+"-"
      }
      console.log(str)
    }
  }
  
  
  
  let queue = new Queue();
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(4)
  queue.peek()
  queue.dequeue()
  queue.peek()
  queue.printQueue()