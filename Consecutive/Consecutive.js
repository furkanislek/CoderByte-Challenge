function Consecutive(arr) { 
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var result = (max-min)-arr.length+1;
    return result;
  }
     
  // keep this function call here 
  console.log(Consecutive(readline()));