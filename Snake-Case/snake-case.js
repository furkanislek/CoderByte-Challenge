function SnakeCase(str) { 
  let result = "";
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","Q","R","S","T","U","V","W","X","Y","Z"]

  for(i=0; i < str.length; i++){
    if(alphabet.indexOf(str[i]) === -1){
      result += "_";
    }
    else{
      result += str[i].toLowerCase();
    }
  }
 return result;
}

// keep this function call here 
console.log(SnakeCase(readline()));