
// LEET CODE : https://leetcode.com/problems/happy-number/description/ 
// SOLVED BY FLOYD'S CYCLE ALGORITHM 
// OR BASICALLY USED FAST AND SLOW POINTER APPROACH


var squareRoot = function(num){
    let sum = 0
    while(num!=0){
        sum += Math.floor(num%10) * Math.floor(num%10) 
        num = Math.floor(num/10)  
    }
    return sum;
}
var isHappy = function(n) {
    
    let slow = n
    let fast = n

    do{
        slow = squareRoot(slow);
        fast = squareRoot(squareRoot(fast));
    }while(slow!==fast);
    return slow == 1;
};