// Have the function PentagonalNumber(num) read num which will be a positive integer and determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration. For example, in the image below you can see that on the first iteration there is only a single dot, on the second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots.



// Your program should return the number of dots that exist in the whole pentagon on the Nth iteration.

function PentagonalNumber(num) { 

    let result = (5*num*num - 5*num +2) / 2 ;
    
    return (result); 
  
  }
     
  // keep this function call here 
  console.log(PentagonalNumber(readline()));