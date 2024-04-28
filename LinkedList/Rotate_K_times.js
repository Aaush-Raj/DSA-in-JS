


//Rotate List
//  Given the head of a linked list, rotate the list to the right by k places.




var rotateRight = function(head, k) {
    if (head === null || head.next === null || k === 0) {
        return head; // If the list is empty, has only one node, or k is 0, no rotation needed
    }

    let lastNode = head;
    let length = 1;
    while (lastNode.next !== null) {
        lastNode = lastNode.next;
        length++;
    }
    
    lastNode.next = head; // Connect the last node to the head to form a circular list

    let rotations = k % length;
    if (rotations === 0) {
        lastNode.next = null; // Break the circular list
        return head; // If k is a multiple of the length, no rotation needed
    }

    let newTail = head;
    for (let i = 0; i < length - rotations - 1; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next; // New head is the node after the new tail
    newTail.next = null; // Break the circular list to form a linear list

    return newHead; // Return the new head of the rotated list
};
