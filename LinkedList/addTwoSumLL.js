//LL-  Add Two Numbers

// https://leetcode.com/problems/add-two-numbers/description/



var addTwoNumbers = function (l1, l2) {
    let dummyNode = new ListNode(-1)
    let curr = dummyNode
    let carry = 0
    let sum = 0;

    while (l1 != null || l2 != null) {
        sum = carry
        if(l1){
            sum += l1.val 
            l1 = l1.next
        }
        if(l2){
            sum += l2.val 
            l2 = l2.next
        }

        carry = Math.floor(sum / 10);
        remainder = sum % 10

        let newNode = new ListNode(remainder);
        curr.next = newNode
        curr = curr.next
        sum = 0
        
        
    }
    if(carry!=0){
    let newNode = new ListNode(carry);
    curr.next = newNode
    }
    return dummyNode.next
};