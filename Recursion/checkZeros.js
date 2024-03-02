// Q --> Check how many zeroes are in the given number

function checkZeros(num,count= 0)
{

   if (num===0)return count;// THis means that there is only one digit left in the number so we will return the counter!
  
  if(num%10 ==0) 
    return checkZeros(Math.floor(num/10),++count)
  
  else{
    return checkZeros(Math.floor(num/10),count)
  }
};

let num = 1010101010;
console.log(checkZeros(num));