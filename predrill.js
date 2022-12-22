// <!-- Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined -->

const dayOfTheWeek = (num) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[num];
};

// const dayOfTheWeek = (num) => {
//   if (num === 0) return 'Sunday';
//   if (num === 1) return 'Monday';
//   if (num === 2) return 'Tuesday';
//   if (num === 3) return 'Wednesday';
//   if (num === 4) return 'Thursday';
//   if (num === 5) return 'Friday';
//   if (num === 6) return 'Saturday';
// };

// const dayOfTheWeek = (num) => {
//     switch(num) {
//       case 0: return 'Sunday';
//       case 1: return 'Monday';
//       case 2: return 'Tuesday';
//       case 3: return 'Wednesday';
//       case 4: return 'Thursday';
//       case 5: return 'Friday';
//       case 6: return 'Saturday';
//     }
//   };
  
//   const result1 = dayOfTheWeek(1); // Monday
//   const result2 = dayOfTheWeek(5); // Friday
//   const result3 = dayOfTheWeek(8); // undefined
  
//   console.log(result1);
//   console.log(result2);
//   console.log(result3);