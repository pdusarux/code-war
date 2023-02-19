/*
Unique In Order

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
  let newValue = typeof iterable === "string" ? iterable.split("") : iterable;
  let newArr = [];

  for (let i = 0; i < newValue.length; i++) {
    if (newValue[i] !== newValue[i - 1]) newArr.push(newValue[i]);
  }

  return newArr;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
