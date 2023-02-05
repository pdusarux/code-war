function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "x" || strArray[i] === "X") {
      xCount++;
    } else if (strArray[i] === "o" || strArray[i] === "O") {
      oCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else if (xCount === 0 && oCount === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("xoo"));
