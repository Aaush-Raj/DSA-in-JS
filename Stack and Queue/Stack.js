

class Stack{
    constructor(){
      this.stack = [];
    }
  
    push(element){
      this.stack.push(element)
    }
  
    pop(){
      if(this.isEmpty()){
        return "Stack is Empty!"
      }
      this.stack.pop()
      
    }
  
    peak(){
      return this.stack[this.size()-1]
    }
    
    isEmpty(){
      return this.stack.length===0
    }
    size(){
      return this.stack.length
    }
  
    printStack(){
      let str = "";
      for (let i = 0; i < this.stack.length; i++) {
          str += this.stack[i] + " ";
      }
      console.log(str.trim());
      return str.trim();
    }
  }
  
  let stack = new Stack()
  stack.push(123)
  stack.push(1233)
  stack.push(12333)
  stack.push(12333)
  console.log(stack.peak())
  stack.pop()
  stack.pop()
  stack.pop()
  
  stack.printStack()