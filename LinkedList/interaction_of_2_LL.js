


// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// BRUTE FORCE: MAKE A SET OF ALL NODEs OF FIRST LL THEN COMPARE 2nd LL NODES with it, and return if matched


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // let map =  {}// cant use js Obj because it converts all keys as string
    let map = new Set();
    let temp  = headA

    while(temp!=null){
        map.add(temp)
        temp = temp.next
    }

    temp = headB;
    while(temp!=null){
        if( map.has(temp)){return temp}
        temp = temp.next
    }
    return null;

};



// OPTIMIZE SOLUTION:
// STEPS:
//  FIND THE LEN OF BOTH LL
// CALCULATE THE DIFFERENCE BETWEEN 2 LL LENGTHS
// WHICHEVER LL IS LARGER, TAKE ITS HEAD TO NEXT UNTIL DIFFERENCE IS 0;
// SO THAT WE CAN START BOTH LL FROM SAME POINT AND COMPARE THERE NODES




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function collisionPoint(smaller_ll, larger_ll,difference){
    
    for(let i=0;i<difference;i++){
        larger_ll = larger_ll.next
    }
  
    while(smaller_ll!=null){
        if(smaller_ll ===larger_ll){return larger_ll}
        smaller_ll = smaller_ll.next
        larger_ll = larger_ll.next
    }
    
    return null;
}
var getIntersectionNode = function (headA, headB) {
    let n1 = 1
    let n2 = 1
    let temp = headA
    while (temp != null) {
        n1 += 1
        temp = temp.next
    }
    temp = headB
    while (temp != null) {
        n2 += 1
        temp = temp.next
    }
    let d = Math.abs(n2- n1);

    if(n2>n1){
        return collisionPoint(headA,headB,d)
    }
    else{
        return collisionPoint(headB,headA,d)
    }
   


};