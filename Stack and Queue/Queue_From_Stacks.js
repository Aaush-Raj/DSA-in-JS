


// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).






var MyQueue = function () {

    this.stack1 = []
    this.stack2 = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
    //   return 
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
     if (this.empty()) {
        return undefined;
    }
    if (this.stack1.length == 1) {
        return this.stack1.pop()
    }
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop())
    }
    const lastElem = this.stack2.pop()
    while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop())
    }
    return lastElem 

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.empty()) {
        return -1;
    }
    return this.stack1[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length == 0 
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */