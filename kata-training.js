/* Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).
example:
  solution('abc', 'bc') // returns true
  solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  let endArray = ending.split("");
  let strArray = str.split("").slice(endArray.length * -1);

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== endArray[i]) {
      return false;
    }
  }
  return true;
}

console.log(solution("abcde", "cde"));
console.log(solution("abcdef", "d"));
