/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


function midOfList(head){
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
 }




function reverseList(head){

    let prev = null;
    let curr = head;
    
    while(curr !=null){
        let next = curr.next;

        curr.next = prev
        prev = curr
        curr = next;
    }

    return prev
}



var reorderList = function(head) {

    if (head == null || head.next == null) {
        return head; // If the list is empty or has only one node, no need to reorder
    }

    let mid = midOfList(head);
    let halfList = reverseList(mid.next)
    mid.next = null; // we divided the LL into 2 parts

    // const answerNode = ListNode(head);
    // head = head.next;
    let current = new ListNode();
    let result = current;

    while( head !== null && halfList !== null){
            current.next = head;
            current = current.next;
            head = head.next;

            current.next = halfList;
            current = current.next;
            halfList = halfList.next;
    }

    if (halfList != null){
        current.next = halfList;
    }
    if (head != null){
        current.next = head;
    }
return result.next; 

    return answerNode
    
};