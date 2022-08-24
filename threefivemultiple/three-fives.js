// ThreeFive Multiples
// Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.
// Examples
// Input: 6
// Output: 8
// Input: 1
// Output: 0

function ThreeFiveMultiples(num) { 

    let threeResult = 0;
    let fiveResult = 0;
    let result = 0;
  
    if(num>= 3){
      for(let i = 3; i< num; i+=3){
        threeResult += i
      }
    }
  
  
     if(num>= 5){
      for(let i = 5; i< num; i+=5){
        fiveResult += i
      }
    }
  
  
    result += threeResult + fiveResult
  
    return result;
  }
     
  // keep this function call here 
  console.log(ThreeFiveMultiples(readline()));