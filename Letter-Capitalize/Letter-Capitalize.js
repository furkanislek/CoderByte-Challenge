// Letter Capitalize
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
// Examples
// Input: "hello world"
// Output: Hello World
// Input: "i ran there"
// Output: I Ran There

function LetterCapitalize(str) { 

    wordarr = str.split(" ");
  
    for(var i = 0, n = wordarr.length; i<n; i++){
      wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1);
    }
    str = wordarr.join(" ");
  
    return str;
  
  }
     
  // keep this function call here 
  console.log(LetterCapitalize(readline()));