/*
Number of trailing zeros of N!

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
*/

function zeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

console.log(zeros(1000));
