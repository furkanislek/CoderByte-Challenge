// String Reduction
// Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.

// For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
// Examples
// Input: "abcabc"
// Output: 2
// Input: "cccc"
// Output: 4

function StringReduction(str) { 

    var defaultplacement = {
      "ab" : "c",
      "ba" : "c",
      "ac" : "b",
      "ca" : "b",
      "bc" : "a",
      "cb" : "a"
    };
  
    var org, key;
    while(str != org){
      org = str;
      for(key in defaultplacement)
      str = str.replace(key, defaultplacement[key]);
  
    }
  
    return str.length;
  
  }
     
  // keep this function call here 
  console.log(StringReduction(readline()));