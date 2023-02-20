/*
Find the smallest integer in the array
For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sum = args[0];
    for (let i = 0; i < args.length; i++) {
      if (sum > args[i]) {
        sum = args[i];
      }
    }
    return sum;
  }
}

const finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([78, 56, 232, 412, 228]));
