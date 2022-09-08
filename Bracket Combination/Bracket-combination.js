// Bracket Combinations
// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
// Examples
// Input: 3
// Output: 5
// Input: 2
// Output: 2

function BracketCombinations(num) { 

    let fac = (n) => {
      let k =1;
      for (var i = n; i>=1 ; i--){
        k *=i;
      }
      return k;
    }
  
    let res = (fac(2*num))/((fac(num+1))*(fac(num)))
    return res
  }
     
  // keep this function call here 
  console.log(BracketCombinations(readline()));