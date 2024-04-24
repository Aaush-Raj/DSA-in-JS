/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (firstHead, secondHead) {



    let ans = new ListNode()
    let tail = ans;
    while(firstHead !== null && secondHead !== null ){
        if(firstHead.val<secondHead.val){
            tail.next = firstHead; 
            firstHead = firstHead.next

        }
        else{
            tail.next = secondHead;
            secondHead = secondHead.next
        }
        tail = tail.next;

        
    }
      tail.next = firstHead !== null ? firstHead : secondHead;

      return ans.next // ans.next because our head of LL was 0 which was default without any value

};