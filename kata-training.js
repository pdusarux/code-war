function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];

console.log(findNeedle(haystack_1));
