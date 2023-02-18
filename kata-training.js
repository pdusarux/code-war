/*
Beginner Series #2 Clock
Your task is to write a function which returns the time since midnight in milliseconds.

h = 0
m = 1
s = 1
result = 61000
*/

function past(h, m, s) {
  return h * 60 * 60000 + m * 60000 + s * 1000;
}

console.log(past(1, 1, 1));
