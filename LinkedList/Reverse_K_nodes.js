// easy tutorial to understand this ::: https://www.youtube.com/watch?v=LCRGV8avvUY&ab_channel=ApnaCollege

var reverseKGroup = function (head, k) {
    let prev = null;
    let curr = head;
    let next;

    let count = 0;
    let temp = head; // Use a temporary variable to count the remaining nodes
    while (temp != null && count < k) {
        temp = temp.next;
        count++;
    }

    // If there are less than k nodes remaining, no need to reverse
    if (count < k) {
        return head;
    }

    // Reverse the first k nodes
    count = 0;
    while (curr != null && count < k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    // Connect the last node of the reversed group to the next reversed group
    if (next != null) {
        head.next = reverseKGroup(next, k);
    }

    return prev; // Return the new head of the reversed group
};
