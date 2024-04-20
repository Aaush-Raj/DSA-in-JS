// find all the subsets in an array ,but the size of subset should be equal to K

function find_subset_of_size_k(index, subset, arr, k) {
    if (index >= arr.length) {
      if (k == 0) {
        console.log(subset);
      }
      return;
    }

    //this logic checks, if there are not enough elements left to add in subset, then there's no point
    // of proceeding , as the size of subset would never get equal to K as there are not enough elements...So Return this recursion...
    // this wont affect the time complexity; however this will stop unnecessary recursive calls
    if (subset.length + (arr.length - index) < k) {
        return;
    }
  
  
    //take
    subset.push(arr[index]);
    find_subset_of_size_k(index + 1, subset, arr, k - 1);
    subset.pop();
  
    //no-take
    find_subset_of_size_k(index + 1, subset, arr, k);
  }
  
  const arr = [1, 2, 4, 6, 5];
  const k = 2;
  find_subset_of_size_k(0, [], arr, k);
  