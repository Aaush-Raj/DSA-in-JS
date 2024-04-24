// CHECK WEATHER A LINKED LIST IS A PALINDROME OR NOT ???


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function middleOfLL(head){
    let slow = head
    let fast = head

    while(fast != null && fast.next != null){
        slow = slow.next
        fast  = fast.next.next
    }
    return slow;
}


function reverseLL(head){

    let prev = null
    let curr = head
    
    while(curr != null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
}
var isPalindrome = function(head) {

    let mid = middleOfLL(head); // find the MIDDLE OF LL EG : 123321
    let secondHead = reverseLL(mid) // MIDDLE SE END TAK LL KO REVERSE KARDO : EG: 123123

    while(head!=null && secondHead != null){ // and check if head and reversedHead goes same or not
        if(head.val != secondHead.val){
            break
        }
        head = head.next;
        secondHead = secondHead.next;
    }

    return head ==null || secondHead == null; //if a palindrome then any one of the List will get empty or both will get empty if LL's length is EVEN
    
};