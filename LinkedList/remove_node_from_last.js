


// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
//Given the head of a linked list, remove the nth node from the end of the list and return its head.




// BRUTE FORCE SOLUTION
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    if (head == null || head.next == null) {
        return null
    }
    let size = 0

    let temp = head;
    while (temp != null) {
        size += 1
        temp = temp.next
    }
    if (size == n) {
        head = head.next
        return head
    }
    let curr = head;
    let range = size - n
    for (let i = 1; i < range; i++) {
        curr = curr.next
    }
    curr.next = curr.next.next
    return head
};


//OPTIMIZED SOLUTION , TAKE FAST AND SLOW, INCREASE FAST TILL N ITERATIONS, THEN INCREASE SLOW AND FAST BOTH UNTIL FAST.NEXT ==NULL(fast is at last Node); THEN SLOW = SLOW>NEXT>NEXT , return head

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    if (head == null || head.next == null) {
        return null
    }
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(fast == null){
        head = head.next;
        return head
    }
    while(fast.next !=null){
        fast = fast.next;
        slow = slow.next
    }
    slow.next = slow.next.next;

    return head

};