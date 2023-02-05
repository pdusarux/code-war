/*
Sum of odd numbers
Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
  1 -->  1
  2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  // return n * n * n;
  let number = 1;
  for (let i = 0; i < n; i++) {
    // let s = "";
    let count = 0;
    for (let j = 0; j <= i; j++) {
      // s += number + " ";
      count += number;
      number += 2;
    }
    if (i === n - 1) {
      return count;
    }
    // console.log(s);
  }
}

console.log(rowSumOddNumbers(42));
