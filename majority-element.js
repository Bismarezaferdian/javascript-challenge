// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
  var count = 0;
  var majorNum = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (!count) {
      majorNum = nums[i]; //jika kondisi count tidak ada atau 0 , isi majorNum = isi nums[index]
      count = 1; //lalu count di isi dengan 1
    } else {
      count += nums[i] === majorNum ? 1 : -1; // jika kondisi count ada isinya >0 , count jika nums[index] sama dengen majorNum , count di tambah 1
      // jika nums[index] tidak sama dengen isi majorNum  , count di kurang 1
    }
  }
  return majorNum;
};

console.log(majorityElement([3, 2, 3, 3, 2, 2, 2]));
