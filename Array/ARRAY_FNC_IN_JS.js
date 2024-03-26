//In this file I am not solving any DSA question , but here are few Array functions which will help you a lot in DOing   DSA with JS!!!


// 1.  Array.shift() --  takes No argument 
//  -- removes the first elemnt of the array 
// returns that element 


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const removedFruit = fruits.shift()
// const removedFruit = fruits.shift(1) // this will work the same as shift(), passing arguments do nothing with shift fnc


console.log(fruits) // [ "Orange", "Apple", "Mango"] --Banana will be removed as its the first element
console.log(removedFruit) // Banana

// If you pass any argument to the Array.shift() method in JavaScript, it will simply ignore those arguments.
//  The shift() method does not take any parameters, 
// so any argument passed to it will have no effect on its operation.
//  The method always removes the first element from an array and returns that element, or undefined if the array is empty





// 2. Array.Unshift()

//The Array.unshift() method in JavaScript is used to add one or more elements to the beginning of an array
//  and returns the new length of the array. NEW LENGTH AFTER ADDING THE ELEMENTS !
//  It modifies the original array.

const fruitss = ["Banana", "Orange", "Apple", "Mango"]; //length of this array is 4 
const addedFruits = fruitss.unshift("Kiwi","waterLemon"); // unshift will add all elements at the starting of array , and store new Length of array
 
console.log(fruitss) // output:  ["Kiwi","waterLemon","Banana", "Orange", "Apple", "Mango"];
console.log(addedFruits ) // output : 6 , as new length of array is 6 now




// NOTE:: The methods shift, unshift, push, and pop in JavaScript are array manipulation methods used to add or remove elements from an array. 

// PUSH - ADD element at the END of Array
// UNSHIFT  - ADD element at the START of Array

// POP - REMOVE element from the END of Array , removes last element
// UNSHIFT  - REMOVE element from the START of Array,  removes the first element

