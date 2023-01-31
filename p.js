// var longestConsecutive = function (nums) {
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         obj[nums[i]] = 1
//     }
//     let max = 0
//     for (let i = 0; i < nums.length; i++) {
//         let ans = 1, j = 1
//         if (obj[nums[i] - 1]) continue
//         else {
//             while (true) {
//                 if (obj[nums[i] + j]) {
//                     ans++
//                     j++
//                 }
//                 else break
//             }
//         }
//         max = Math.max(max, ans)
//     }
//     return max
// };
// console.log(longestConsecutive([0, -1]));
// [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]

//[[-4,0,4],[-4,1,3],[-3,1,2],[-1,0,1]]
// //[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
// const threeSum = function (nums) {
//     nums.sort((a, b) => (a - b))
//     let ans = []
//     let obj = {}
//     let fixed = 0
//     while (fixed < nums.length - 2) {
//         let start = fixed + 1, end = nums.length - 1
//         while (start < end) {
//             if (nums[fixed] + nums[start] + nums[end] == 0) {
//                 if (!obj[[nums[fixed], nums[start], nums[end]]])
//                     ans.push([nums[fixed], nums[start], nums[end]])
//                 obj[[nums[fixed], nums[start], nums[end]]] = 1
//                 start++
//                 end--
//             }
//             else if (nums[start] + nums[end] < -nums[fixed])
//                 start++
//             else end--
//         }
//         fixed++
//     }
//     return ans

// };
// console.log(threeSum(nums = [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]));
// var maxArea = function (height) {
//     height.sort((a, b) => (a - b))
//     if(height.length == 2)
//     return height[height.length-2] * height[height.length-3]
//     let i = height.length - 2
//     while (height[height.length - 1] == height[i])
//        i--
//         return height[i] * height[i]
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
var trap = function (height) {
    let leftMaxHgt = []
    let rightMaxHgt = []
    let max = 0
    let maxtrappedwater = 0
    for (let i = 0; i < height.length - 1; i++) {
        if (i == 0) {
            leftMaxHgt.push(height[0])
            max = Math.max(height[i], max)
        }
        else {
            max = Math.max(height[i], max)
            leftMaxHgt.push(max)
        }
    }
    max = 0
    for (let i = height.length - 1; i >= 0; i--) {
        if (i == height.length - 1) {
            max = Math.max(height[i], max)
        }
        else {
            max = Math.max(height[i], max)
            rightMaxHgt[i] = max
        }
    }
    console.log(leftMaxHgt)
    console.log(rightMaxHgt)
    for (let i = 0; i < height.length; i++) {
        let min = Math.min(rightMaxHgt[i], leftMaxHgt[i])
        if (height[i] < min)
            maxtrappedwater += Math.abs(min - height[i])
    }
    return maxtrappedwater
};
console.log(trap([4, 2, 0, 3, 2, 5]));
// [4, 2, 2, 3, 3]
// [4, 3, 3, 3, 2, 5]