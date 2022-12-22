// Write a function that takes in an array of integers and it return an array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

// const removeDuplicates = (nums) => {
//     const stored = [];
//     for (const num of nums){
//         if (!stored.includes(nums)){
//             stored.push(num);
//         }
//     }
//     return stored;
// };

// const removeDuplicates = (nums) => {
//     const stored = {};
//     for (const num of nums){
//         stored[num] = 1;
//     }
//     return Object.keys(stored).map(Number);
// };


// const removeDuplicates = (nums) =>{
//     return nums.reduce((prev, curr) => {
//         return !prev.includes(curr) ? prev.concat(curr) : prev;
//     }, []);
// }

const removeDuplicates = (nums) => [...new Set (num)];


const result1 = removeDuplicates([1,2,2,3]); // Output: [1,2,3]
const result2 = removeDuplicates([4,5,4,4,7,5]); // Output: [4,5,7]
const result3 = removeDuplicates([1,2,3,5]); // Output: [1,2,3,5]

console.log(result1);
console.log(result2);
console.log(result3);