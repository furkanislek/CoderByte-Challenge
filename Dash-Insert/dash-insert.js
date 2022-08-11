// Dash Insert
// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
// Examples
// Input: 99946
// Output: 9-9-946
// Input: 56730
// Output: 567-30


function DashInsert(str) { 

    var i = 0;
    while(i<str.length-1){
      if(Number(str[i]) % 2 === 1 && Number(str[i+1]) % 2 === 1 ){
        str = str.slice(0,i+1)+ "-" + str.slice(i+1);
        i = i +2;
      }
      else{
        i++
      }
    }
    return str;
  }
     
  // keep this function call here 
  console.log(DashInsert(readline()));