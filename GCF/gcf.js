// GCF
// Have the function GCF(arr) take the array of numbers stored in arr which will always contain only two positive integers, and return the greatest common factor of them. For example: if arr is [45, 12] then your program should return 3. There will always be two elements in the array and they will be positive integers.
// Examples
// Input: [1, 6]
// Output: 1
// Input: [12, 28]
// Output: 4

function GCF(arr) { 

    let result = "";
    let max = Math.max(...arr);
    let min = Math.min(...arr);
  
    for (let i = 1; i<=min; i++){
      if(max % i === 0 && min % i === 0){
        result = i;
      }
    }
  
    return result
  
  }
     
  // keep this function call here 
  console.log(GCF(readline()));