// Histogram Area
// Have the function HistogramArea(arr) read the array of non-negative integers stored in arr which will represent the heights of bars on a graph (where each bar width is 1), and determine the largest area underneath the entire bar graph. For example: if arr is [2, 1, 3, 4, 1] then this looks like the following bar graph:



// You can see in the above bar graph that the largest area underneath the graph is covered by the x's. The area of that space is equal to 6 because the entire width is 2 and the maximum height is 3, therefore 2 * 3 = 6. Your program should return 6. The array will always contain at least 1 element.
// Examples
// Input: [6, 3, 1, 4, 12, 4]
// Output: 12
// Input: [5, 6, 7, 4, 1]
// Output: 16

function HistogramArea(arr) {

    arr.push(0);
    let stack = [];
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      let arrStart = i;
      while (stack.length && stack[stack.length - 1][1] > arr[i]) {
        let [pos, arrH] = stack.pop();
        res = Math.max(res, (i - pos) * arrH);
        arrStart = pos;
      }
      stack.push([arrStart, arr[i]]);
    }
    return res;
  }
  
  // keep this function call here 
  console.log(HistogramArea(readline()));