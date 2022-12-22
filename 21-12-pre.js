// Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints:

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

// Output true if the string is a valid password or false otherwise.

// Ex:
// Input: RexTheDog
// Output: true

// Input: rexthedog
// Output: false

// Input: REXTHEDOG
// Output: false

// Input: Dog
// Output: false

// const isValidPassword = (str) => {
//     let hasUpper = false;
//     let hasLower = false;
// // 1. It must be at least 8 characters long
//     if(str.length < 8){
//         return false;
//     }
// // 2. It must contain at least 1 capital letter
// // 3. It must contain at least 1 lower case letter 
//     for (let i = 0; i < str.length; i++){
//         if(str[i].toUpperCase() === str[i]){
//             hasUpper = true;
//         }
//         if(str[i].toLowerCase() === str[i]){
//             hasLower = true;
//         }
//     }
//     return hasLower && hasUpper;
// };




//  /regular expression/ 
//  /^[a-z]/i  
// ^ says start at the beginning
// $ ends the expression 
// [some range]
// i means case insensitive
// . means any character
// positive look aheads emulate a for loop ?=.*

const isValidPassword = (str) => /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(str);

const result1 = isValidPassword('RexTheDog');
console.log(result1);