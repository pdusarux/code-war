/*
All Star Code Challenge #18
*/

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

console.log(strCount("Hello", "o"));
