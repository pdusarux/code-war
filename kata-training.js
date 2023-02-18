/*
Complementary DNA
  sol => A & T , C & G

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna) {
  return dna
    .split("")
    .map((e) => convertDNA(e))
    .join("");
}

function convertDNA(e) {
  switch (e) {
    case "A":
      return "T";

    case "T":
      return "A";

    case "C":
      return "G";

    case "G":
      return "C";
  }
}

console.log(DNAStrand("TAAA"));

// shortest solution by chatGPT
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(char) {
//     return { A: "T", T: "A", C: "G", G: "C" }[char];
//   });
// }
