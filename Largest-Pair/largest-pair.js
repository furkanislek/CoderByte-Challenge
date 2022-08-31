// Largest Pair
// Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.
// Examples
// Input: 453857
// Output: 85
// Input: 363223311
// Output: 63

function LargestPair(num) { 

    num = num.toString();
  
    let max = 0;
    for(let i = 0; i<num.length-1; i++){
      let res = parseInt(num[i] + num[i+1]);
      if(res>max)
        max = res
    }
    return max
  }
     
  // keep this function call here 
  console.log(LargestPair(readline()));