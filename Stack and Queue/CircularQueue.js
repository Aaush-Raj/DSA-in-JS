





// for revision and explanation watch:
// EXPLANATION:: https://www.youtube.com/watch?v=ngNJps_RUg8&ab_channel=Codevolution
//CODE::  https://www.youtube.com/watch?v=oIR_DOOOACk&t=634s&ab_channel=Codevolution



class circularQueue {
    constructor(size) {
      this.items = new Array(5);
      this.maxSize = size;
      this.front = -1;
      this.rear = -1;
      this.currentSize = 0;
    }
  
    
  
    ifFull(){
      return this.currentSize === this.maxSize;
    }
  
    isEmpty(){
      return this.currentSize ===0;
    }
  
    enqueue(value){
      if(this.isFull())return null;
      if(this.front === -1){
        this.front =0
      }
      this.rear = (this.rear +1)%this.maxSize;
      this.items[this.rear] = value;
      this.currentSize++;
    }
  
  
  dequeue(){
    if(this.isEmpty())return false;
  
    this.items[this.front] = null;
    this.currentSize--;
  
    if(this.isEmpty()){
      this.front =-1
      this.rear=-1
    }
    
    this.front = (this.front+1) %this.maxSize;
    
  }
  
  peek(){
    if(this.isEmpty()){return false};
    return this.items[this.front]
  }
  
  rear(){
    if(this.isEmpty()){return false}
    return this.items[this.rear]
  }
  }
  
  let CQ = new circularQueue(4);

  














  /**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.items = new Array(k);
    this.maxSize = k;
    this.front = -1;
    this.rear = -1;
    this.currentSize = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
 if(this.isFull())return false;
    if(this.front === -1){
      this.front =0
    }
    this.rear = (this.rear +1)%this.maxSize;
    this.items[this.rear] = value;
    this.currentSize++;
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
 if(this.isEmpty())return false;

  this.items[this.front] = null;
  this.currentSize--;

  if(this.isEmpty()){
    this.front =-1
    this.rear=-1
  }
  
  this.front = (this.front+1) %this.maxSize;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
if(this.isEmpty()){return -1};
  return this.items[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
 if(this.isEmpty()){return -1}
  return this.items[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.currentSize ===0;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
return this.currentSize === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */