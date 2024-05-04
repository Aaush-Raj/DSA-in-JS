

// REVERSING A LINKED LIST ,LEETCODE PROBLEM
// USED 3 POINTER APPROACH TO REVERSE THE LINKED LIST
var reverseList = function(head) {
    
    let prev = null
    let curr= head
    let next;

    while(curr!=null){
        next = curr.next;
        curr.next = prev;

        prev = curr
        curr = next;
        
    }
    return prev
};


// REVERSE A LINKED LIST WITH RECURSION!!! 


var reverseList = function(head) {
    if(head==null || head.next == null)return head;

    let newNode = reverseList(head.next)
    let frontNode = head.next;
    frontNode.next = head
    head.next = null
    return newNode


};