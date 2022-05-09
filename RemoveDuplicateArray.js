RemoveDuplicateArray = (nums) => {
  if (nums.length == 0) return 0;
  let opt = [];
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j + 1]) {
      opt.push(nums[j]);
    }
  }

  return opt;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(RemoveDuplicateArray(nums));
