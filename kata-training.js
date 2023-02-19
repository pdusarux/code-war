/*
Counting Duplicates
*/

function duplicateCount(text) {
  let newArr = [];
  let newValue = text.toLowerCase().split("");
  newValue.forEach((e) => newArr.push(newValue.indexOf(e)));
  let count = 0;
  let newArr2 = [];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] === newArr[j]) {
        count++;
      }
    }
    if (count > 1) {
      newArr2.push(newArr[i]);
    }
    count = 0;
  }
  let newArr3 = [...new Set(newArr2)];

  return newArr3.length;
}

// shortest solution by chatGPT
// function duplicateCount(text) {
//   let count = 0,
//     arr = [...new Set(text.toLowerCase().split(""))];
//   arr.forEach((char) => {
//     console.log("char:>", char);
//     console.log(text.toLowerCase().split(char));
//     text.toLowerCase().split(char).length - 1 > 1 ? count++ : count;
//   });
//   return count;
// }

console.log(duplicateCount("aabBcccdef"));
