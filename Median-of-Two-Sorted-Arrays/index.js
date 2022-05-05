

var findMedianSortedArrays = function(nums1, nums2) {
  const total = [];

  while (nums1.length && nums2.length) {
    const element1 = nums1[0];
    const element2 = nums2[0];
    if (element1 < element2) {
      total.push(element1);
      nums1.shift();
    } else {
      total.push(element2);
      nums2.shift();
    }
  }

  if (nums1.length) {
    for (let index = 0; index < nums1.length; index++) {
      total.push(nums1[index]);
    }
  }
  if (nums2.length) {
    for (let index = 0; index < nums2.length; index++) {
      total.push(nums2[index]);
    }
  }

  return total.length % 2 === 0 ? (total[total.length / 2] + total[total.length / 2 - 1]) / 2: total[Math.floor(total.length / 2)]
};

const nums1 = [-2, -1];

const nums2 = [3];
console.log(findMedianSortedArrays(nums1, nums2));
