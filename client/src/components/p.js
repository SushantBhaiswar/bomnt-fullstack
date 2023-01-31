
// let s = ["azbde", "abcher", "acegk"]
// let m = 50
// let sum = 0
// for (let i = 0; i < s.length; i++) {
//     let temp = 1
//     let word = s[i]
//     for (let j = 0; j < word.length; j++) {
//         let d = word[j].charCodeAt(0)

//         BigInt(temp *= Math.pow(d, 2))
//     }
//    BigInt(sum+= temp)  

// }
// console.log(sum);
// if (BigInt(sum % 2) == 0) console.log("EVEN")
// else console.log("ODD")
// function x() {

//     return "hello"

// }

// const sentence = x`hi`

// console.log(sentence)
// function y() {

//     console.log(this.length)

// }

// var x = {

//     length: 5,

//     method: function (y) {

//         arguments[0]()

//     }

// }

// x.method(y, 1)
// const clothes = ['jacket', 't-shirt'];

// clothes.length = 0;

// console.log(clothes[0]) // => ???
// setTimeout(()=>{
// console.log("timeout");
// },0)

// const object = { x: 10, y: (a) => { return a + object.x } }

// console.log(object.y(5))
// console.log(object.y(5))
// setTimeout(()=>{
// console.log("timeout 2");
// },0)
// console.log(object.y(5))
// console.log(object.y(5))

// abc = () => 
//     5 * 10

// function regularFunction(a, b) {
//     console.log(arguments)
// }
// regularFunction(1, 2)
// function bcd() 
//     5 * 20

// console.log(abc());
// console.log(bcd());
// function resolveAfter2Seconds() {
//     return (
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000))

// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
// }

// asyncCall();
// var a = async () => {

//     await setTimeout(() => {
//         console.log("runhogaya2");
//     },
//         5000)

//     setTimeout(() => {
//         console.log("runhogaya");
//     },
//         2000)
// }
// a()


// abc = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("resolved")
//         }, 2000)
//     })
// }
// fun =  () => {
//     let result =  abc().then((res) => {
//         console.log(res);
//     })
//     console.log(result)
//     console.log("abc");
// }
// fun()



// fun = () => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(2)
//         }, 3000)
//     })
// }
// function MatchingCharacters(str) { 

//   var count  = 0
//     for(var i = 0; i < str.length; i++){
//       var charObj = {}
//       let a =str[i]
//       var lastIdx = str.lastIndexOf(a)
//       if(i == lastIdx) continue
//       for(var j = i+1; j < lastIdx; j++){
//         if(charObj[str[j]] == undefined) charObj[str[j]] = str[j]
//       }
//       if(count < Object.keys(charObj).length) count = Object.keys(charObj).length
//     }
//     return count
// }



// // keep this function call here 
// console.log(MatchingCharacters("ppuuerrme"));
// let arr = ["Mobile", "Tv"]

// function popItem() {
//   return new Promise((resolved, reject) => {

//     setTimeout(() => {
//       let a = arr.pop()
//       console.log("The pop value is ", a)
//       resolved("its , done")
//     }, 2000)
//   })
// }

// function addItem1(item, arr) {
//   return new Promise((resolved, reject) => {
//     setTimeout(() => {
//       arr.push(item)
//       resolved("yes done")
//     })
//   }, 1000)
// }

// console.log(arr)

// let abc = addItem1("camera", arr)
//   .then(popItem)

// abc = addItem1("showcase", arr)
//   .then(popItem)

// abc = addItem1("lamba", arr)
//   .then(popItem)
// function foo1() {
//   return {
//     "book": 1
//   }
// }
// function foo2() {

//   return{
//     "book": 1
//   }
// }
// console.log(foo1());
// console.log(foo2());
// let arr = [{ k: 4 }, { g: 2 }, { p: 6 }]
// let arr2 = []

// for (let i = 0; i < arr.length; i++) {
//   arr2.push({...arr[i]})

// }
// arr2[1].g = 6
// console.log(arr);
// console.log(arr2);
// let arr = [2, 9, 5, 12, 98, 43]
// let del = false
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 5) del = true
//   if (del)
//     arr[i] = arr[i+1]

// }
// arr.length = arr.length - 1
// console.log(arr);


// var longestOnes = function (nums, k) {

    // let maxlength = 0
    // let start = 0
    // let next = 0
    // let map = new Map()
    // map.set(1, 0)
    // map.set(0, 0)
    // while (next < nums.length) {

    //     if (map.get(0) <= k)
    //         map.set(nums[next], map.get(nums[next++]) + 1)
    //     else if (map.get(0) > k)
    //         map.set(nums[start], map.get(nums[start++]) - 1)
    //     if (map.get(0) <= k)
    //         maxlength = Math.max(map.get(1) + map.get(0), maxlength)
    // }

    // return maxlength
//     let map = new Map();
//     let maxLength = 0;
//     let left = 0;
//     for (let right = 0; right < nums.length; right++) {
//         let element = nums[right];
//         map.set(element, (map.get(element) || 0) + 1);

//         //condition check
//         while (map.get(0) > k && left <= right) {
//             map.set(nums[left], map.get(nums[left]) - 1);
//             left++;
//         }

//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// };
// console.log(longestOnes(nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2));

// let root = [3, 9, 20, null, null, 15, 7]
// var levelOrder = function (root) {

//     if (root == null)
//         return [];

//     let q = []; //create a queue
//     let answer = [];
//     q.push(root);
//     while (q.length != 0) {

//         let levelNodesList = [];
//         let nodesAtCurrLevel = q.length;

//         for (let i = nodesAtCurrLevel; i > 0; i--) {
//             let currNode = q.shift(); //pop from queue from front end
//             levelNodesList.push(currNode.val);


//             if (currNode.left != null)
//                 q.push(currNode.left);

//             if (currNode.right != null)
//                 q.push(currNode.right);
//         }

//         answer.push(levelNodesList);
//     }
//     return answer;
// }

// console.log(levelOrder(root))
"use strict";
x = 3.14;     
console.log(x);