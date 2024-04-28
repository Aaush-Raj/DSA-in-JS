


// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).


var MyStack = function() {
    this.queue1 = []
    this.queue2= []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.empty())return undefined
    if(this.queue1.length ==1 ){
        return this.queue1.pop()
    }
    while(this.queue1.length>0){
        this.queue2.push(this.queue1.pop())
    }
    const popedElem = this.queue2.shift() 
    while(this.queue2.length>0){
        this.queue1.push(this.queue2.pop())
    }
    return popedElem;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[this.queue1.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length ==0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */