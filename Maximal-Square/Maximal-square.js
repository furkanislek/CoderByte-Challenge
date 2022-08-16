function MaximalSquare(strArr) { 

    var numRows = strArr.length;
    var numCols = strArr[0].length;
    var maxDim = Math.min(numRows, numCols);
    var dim = maxDim;
  
    while(dim>0){
      if(hasSquare(strArr,dim)){
        return dim*dim;
      }
      dim--;
    }
  
    function hasSquare(arr,dim){
      for(var row= 0; row<arr.length; row++){
        for( var col  = 0; col<arr[0].length; col++){
          if(hasSquareStartingAt(row,col,arr,dim)){
            return true;
          }
        }
      }
      return false;
    }
  
    function hasSquareStartingAt(startingRow,startingCol,arr,dim){
      var endRow = startingRow + dim -1;
      if(endRow > arr.length -1){
        return false;
      }
  
      var endCol = startingCol + dim -1;
      if(endCol > arr.length -1){
        return false;
      }
  
      for( var row = startingRow; row<= endRow; row++){
        for( var col  = startingCol; col<endCol; col++){
          var value = parseInt(arr[row][col],10);
          if(value === 0){
            return false;
          }
      }
    }
    return true;
  }}
  // keep this function call here 
  console.log(MaximalSquare(readline()))