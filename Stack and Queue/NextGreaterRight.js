function nextGreaterRight(arr, n) {
  let stack = [];
  let result = new Array(n); // Pre-define the array size for better performance

  // Traverse the array from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Remove all elements from the stack that are less than or equal to the current element
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // If stack is empty, no greater element to the right
    if (stack.length === 0) {
      result[i] = BigInt(-1);
    } else {
      // The next greater element is the top of the stack
      result[i] = stack[stack.length - 1];
    }

    // Push current element onto the stack
    stack.push(arr[i]);
  }

  return result;
}

console.log(nextGreaterRight([1, 3, 2, 4], 4));
