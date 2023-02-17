/*
Disemvowel Trolls

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
  const txt = str.split("");
  let newTxt = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < txt.length; i++) {
    const element = txt[i];
    if (!vowels.includes(element)) {
      newTxt.push(element);
    }
  }
  return newTxt.join("");
}

console.log(disemvowel("This website is for losers LOL!"));

// shortest solution by chatGPT
// function disemvowel(str) {
//   const vowels = "aeiouAEIOU";
//   return str
//     .split("")
//     .filter((c) => !vowels.includes(c))
//     .join("");
// }

// console.log(disemvowel("This website is for losers LOL!"));
