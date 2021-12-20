// console.log("hello world");
//THE TWO SUM PROBLEM BRUTE FORCE SOLUTION O(N2)
//INPUT---> [2,6,4,3] TARGET=9
//OUTPUT--->[1,3]
function twoSum(nums, target) {
  let index = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index.push(i);
        index.push(j);
      }
    }
  }
  // console.log(index);
  return index;
}
twoSum([2, 6, 4, 3], 9);

function longestSubstring(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
      }
    }
  }
}
